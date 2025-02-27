import { Server } from 'node:http';
import request from 'supertest';
import { getConnection } from 'typeorm';
import app from '../app';
import { clearDB, fakeSession, setupDB } from './helpers';
import { createContest, createRound, createTeam, createUser } from './factory';
import { Submission } from '../models/Submission';
import { JudgeToRound } from '../models/judging/JudgeToRound';
import { Criteria } from '../models/judging/Criteria';
import { CreateJudging } from '../../shared/integration';
import { JUDGING_TYPE } from '../../shared/models';

let server: Server;

beforeAll(async () => {
    await setupDB();
    server = app.listen();
});

afterAll(() => {
    getConnection().close();
    server.close();
});

beforeEach(async () => {
    await clearDB();
});

describe('judging endpoints', () => {

    it('should not query for normal users', async () => {
        const [user, contest] = await Promise.all([
            createUser(),
            createContest(),
        ]);
        const round = await createRound(contest);

        expect(round.getJudgeType(user.id)).toBeUndefined();

        const res = await request(server)
            .get('/api/judging')
            .set('Cookie', fakeSession(user.id));

        expect(res.status).toEqual(401);
        expect(res.body).toMatchObject({});
    });

    it('should insert a new judging and be able to get them back', async () => {
        const [user, contest] = await Promise.all([
            createUser(),
            createContest(),
        ]);
        const round = await createRound(contest);
        const team = await createTeam(user, contest);
        round.judgeToRounds.push({
            user,
            judgingTypeId: JUDGING_TYPE.Mappers,
        } as JudgeToRound);
        await round.save();

        const submission = await Submission.fillAndSave(round, team);
        const criteria = await Criteria.findOneOrFail({
            judgingTypeId: JUDGING_TYPE.Mappers,
        });

        let res = await request(server)
            .post('/api/judging')
            .set('Cookie', fakeSession(user.id))
            .send({
                judging: {
                    submission,
                    comment: 'some general comment',
                },
                judgingToCriteria: {
                    criteria,
                    comment: 'specific criteria comment',
                    score: 1,
                },
            } as CreateJudging);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('success');

        res = await request(server)
            .get('/api/judging')
            .set('Cookie', fakeSession(user.id));

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('judgingDone');
        expect(res.body.judgingDone).toHaveLength(1);
    });

});
