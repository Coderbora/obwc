import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initialize1619685503179 implements MigrationInterface {
    name = 'Initialize1619685503179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE `judging_type` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `criteria` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `maxScore` int NOT NULL, `judgingTypeId` int NOT NULL, `contestId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `judging_to_criteria` (`id` int NOT NULL AUTO_INCREMENT, `judgingId` int NOT NULL, `criteriaId` int NOT NULL, `score` int NOT NULL, `comment` text NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `judging` (`id` int NOT NULL AUTO_INCREMENT, `comment` text NULL, `judgeId` int NOT NULL, `submissionId` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `submission` (`id` int NOT NULL AUTO_INCREMENT, `originalPath` varchar(255) NOT NULL, `anonymisedAs` varchar(255) NULL, `teamId` int NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `roundId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `team` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `wasConfirmed` tinyint NOT NULL DEFAULT 0, `countryId` int NOT NULL, `captainId` int NOT NULL, `contestId` int NOT NULL, UNIQUE INDEX `IDX_cf461f5b40cf1a2b8876011e1e` (`name`), UNIQUE INDEX `REL_f71181e2994176fd624db416c2` (`captainId`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `country` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `code` varchar(255) NOT NULL, UNIQUE INDEX `IDX_2c5aa339240c0c3ae97fcc9dc4` (`name`), UNIQUE INDEX `IDX_8ff4c23dc9a3f3856555bd8618` (`code`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `osuId` int NOT NULL, `username` varchar(255) NOT NULL, `roleId` int NOT NULL, `countryId` int NOT NULL, `teamId` int NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_df0f1a5a12cccfd4bfb4c768aa` (`osuId`), UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `judge_to_round` (`id` int NOT NULL AUTO_INCREMENT, `roundId` int NOT NULL, `userId` int NOT NULL, `judgingTypeId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `song` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `roundId` int NOT NULL, UNIQUE INDEX `IDX_75669bae45c450fe7d011fad22` (`title`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `round` (`id` int NOT NULL AUTO_INCREMENT, `submissionsStartedAt` datetime NOT NULL, `submissionsEndedAt` datetime NOT NULL, `judgingStartedAt` datetime NOT NULL, `judgingEndedAt` datetime NOT NULL, `resultsAt` datetime NOT NULL, `downloadLink` varchar(255) NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `contestId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `contest` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `announcementAt` datetime NOT NULL, `registrationStartedAt` datetime NOT NULL, `registrationEndedAt` datetime NOT NULL, UNIQUE INDEX `IDX_539e3441ee788f535c7d0e2a04` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `log` (`id` int NOT NULL AUTO_INCREMENT, `text` varchar(255) NOT NULL, `type` enum (\'General\', \'User\', \'Admin\', \'Error\') NOT NULL DEFAULT \'General\', `typeId` int NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB');
        await queryRunner.query('CREATE TABLE `team_invitations_user` (`teamId` int NOT NULL, `userId` int NOT NULL, INDEX `IDX_c7a177dfdaef709f4537474c7a` (`teamId`), INDEX `IDX_e51b4b2a9f85e2d0cb17168a42` (`userId`), PRIMARY KEY (`teamId`, `userId`)) ENGINE=InnoDB');
        await queryRunner.query('ALTER TABLE `criteria` ADD CONSTRAINT `FK_52bd419577f9711f951b97c817e` FOREIGN KEY (`contestId`) REFERENCES `contest`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `criteria` ADD CONSTRAINT `FK_3bd1ec7b0d85148c1effd7e4738` FOREIGN KEY (`judgingTypeId`) REFERENCES `judging_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judging_to_criteria` ADD CONSTRAINT `FK_457937407de75e53742b1fd588f` FOREIGN KEY (`judgingId`) REFERENCES `judging`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judging_to_criteria` ADD CONSTRAINT `FK_2e8c0fc423bf98f051b04eaef95` FOREIGN KEY (`criteriaId`) REFERENCES `criteria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judging` ADD CONSTRAINT `FK_60f3ba26984b01b2367f179ec38` FOREIGN KEY (`judgeId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judging` ADD CONSTRAINT `FK_f80ff07781c433aab21b2e1e8ae` FOREIGN KEY (`submissionId`) REFERENCES `submission`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `submission` ADD CONSTRAINT `FK_7ad334aa998a6a653c31cab4a32` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `submission` ADD CONSTRAINT `FK_d47ea70e5451399de0d8e136597` FOREIGN KEY (`roundId`) REFERENCES `round`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `team` ADD CONSTRAINT `FK_ca5e3b708ccb207143742966cc6` FOREIGN KEY (`contestId`) REFERENCES `contest`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `team` ADD CONSTRAINT `FK_4048a9fc6530195bfd2fb184312` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `team` ADD CONSTRAINT `FK_f71181e2994176fd624db416c24` FOREIGN KEY (`captainId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `user` ADD CONSTRAINT `FK_c28e52f758e7bbc53828db92194` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `user` ADD CONSTRAINT `FK_4aaf6d02199282eb8d3931bff31` FOREIGN KEY (`countryId`) REFERENCES `country`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `user` ADD CONSTRAINT `FK_1e89f1fd137dc7fea7242377e25` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE SET NULL ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judge_to_round` ADD CONSTRAINT `FK_c870d300591160129a71110519a` FOREIGN KEY (`roundId`) REFERENCES `round`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judge_to_round` ADD CONSTRAINT `FK_998863ec96819e81cfd052142a4` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `judge_to_round` ADD CONSTRAINT `FK_4ee24d5854340434f49ed92bbf9` FOREIGN KEY (`judgingTypeId`) REFERENCES `judging_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `song` ADD CONSTRAINT `FK_5fad771385cf70cb7e7d9c4e449` FOREIGN KEY (`roundId`) REFERENCES `round`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `round` ADD CONSTRAINT `FK_8b893f9483687cb0675aaf1e82c` FOREIGN KEY (`contestId`) REFERENCES `contest`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `team_invitations_user` ADD CONSTRAINT `FK_c7a177dfdaef709f4537474c7a7` FOREIGN KEY (`teamId`) REFERENCES `team`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE `team_invitations_user` ADD CONSTRAINT `FK_e51b4b2a9f85e2d0cb17168a422` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `team_invitations_user` DROP FOREIGN KEY `FK_e51b4b2a9f85e2d0cb17168a422`');
        await queryRunner.query('ALTER TABLE `team_invitations_user` DROP FOREIGN KEY `FK_c7a177dfdaef709f4537474c7a7`');
        await queryRunner.query('ALTER TABLE `round` DROP FOREIGN KEY `FK_8b893f9483687cb0675aaf1e82c`');
        await queryRunner.query('ALTER TABLE `song` DROP FOREIGN KEY `FK_5fad771385cf70cb7e7d9c4e449`');
        await queryRunner.query('ALTER TABLE `judge_to_round` DROP FOREIGN KEY `FK_4ee24d5854340434f49ed92bbf9`');
        await queryRunner.query('ALTER TABLE `judge_to_round` DROP FOREIGN KEY `FK_998863ec96819e81cfd052142a4`');
        await queryRunner.query('ALTER TABLE `judge_to_round` DROP FOREIGN KEY `FK_c870d300591160129a71110519a`');
        await queryRunner.query('ALTER TABLE `user` DROP FOREIGN KEY `FK_1e89f1fd137dc7fea7242377e25`');
        await queryRunner.query('ALTER TABLE `user` DROP FOREIGN KEY `FK_4aaf6d02199282eb8d3931bff31`');
        await queryRunner.query('ALTER TABLE `user` DROP FOREIGN KEY `FK_c28e52f758e7bbc53828db92194`');
        await queryRunner.query('ALTER TABLE `team` DROP FOREIGN KEY `FK_f71181e2994176fd624db416c24`');
        await queryRunner.query('ALTER TABLE `team` DROP FOREIGN KEY `FK_4048a9fc6530195bfd2fb184312`');
        await queryRunner.query('ALTER TABLE `team` DROP FOREIGN KEY `FK_ca5e3b708ccb207143742966cc6`');
        await queryRunner.query('ALTER TABLE `submission` DROP FOREIGN KEY `FK_d47ea70e5451399de0d8e136597`');
        await queryRunner.query('ALTER TABLE `submission` DROP FOREIGN KEY `FK_7ad334aa998a6a653c31cab4a32`');
        await queryRunner.query('ALTER TABLE `judging` DROP FOREIGN KEY `FK_f80ff07781c433aab21b2e1e8ae`');
        await queryRunner.query('ALTER TABLE `judging` DROP FOREIGN KEY `FK_60f3ba26984b01b2367f179ec38`');
        await queryRunner.query('ALTER TABLE `judging_to_criteria` DROP FOREIGN KEY `FK_2e8c0fc423bf98f051b04eaef95`');
        await queryRunner.query('ALTER TABLE `judging_to_criteria` DROP FOREIGN KEY `FK_457937407de75e53742b1fd588f`');
        await queryRunner.query('ALTER TABLE `criteria` DROP FOREIGN KEY `FK_3bd1ec7b0d85148c1effd7e4738`');
        await queryRunner.query('ALTER TABLE `criteria` DROP FOREIGN KEY `FK_52bd419577f9711f951b97c817e`');
        await queryRunner.query('DROP INDEX `IDX_e51b4b2a9f85e2d0cb17168a42` ON `team_invitations_user`');
        await queryRunner.query('DROP INDEX `IDX_c7a177dfdaef709f4537474c7a` ON `team_invitations_user`');
        await queryRunner.query('DROP TABLE `team_invitations_user`');
        await queryRunner.query('DROP TABLE `log`');
        await queryRunner.query('DROP INDEX `IDX_539e3441ee788f535c7d0e2a04` ON `contest`');
        await queryRunner.query('DROP TABLE `contest`');
        await queryRunner.query('DROP TABLE `round`');
        await queryRunner.query('DROP INDEX `IDX_75669bae45c450fe7d011fad22` ON `song`');
        await queryRunner.query('DROP TABLE `song`');
        await queryRunner.query('DROP TABLE `judge_to_round`');
        await queryRunner.query('DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`');
        await queryRunner.query('DROP INDEX `IDX_df0f1a5a12cccfd4bfb4c768aa` ON `user`');
        await queryRunner.query('DROP TABLE `user`');
        await queryRunner.query('DROP INDEX `IDX_ae4578dcaed5adff96595e6166` ON `role`');
        await queryRunner.query('DROP TABLE `role`');
        await queryRunner.query('DROP INDEX `IDX_8ff4c23dc9a3f3856555bd8618` ON `country`');
        await queryRunner.query('DROP INDEX `IDX_2c5aa339240c0c3ae97fcc9dc4` ON `country`');
        await queryRunner.query('DROP TABLE `country`');
        await queryRunner.query('DROP INDEX `REL_f71181e2994176fd624db416c2` ON `team`');
        await queryRunner.query('DROP INDEX `IDX_cf461f5b40cf1a2b8876011e1e` ON `team`');
        await queryRunner.query('DROP TABLE `team`');
        await queryRunner.query('DROP TABLE `submission`');
        await queryRunner.query('DROP TABLE `judging`');
        await queryRunner.query('DROP TABLE `judging_to_criteria`');
        await queryRunner.query('DROP TABLE `criteria`');
        await queryRunner.query('DROP TABLE `judging_type`');
    }

}
