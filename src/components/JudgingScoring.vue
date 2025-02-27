<template>
    <div v-if="originalJudging && criteria && submission" class="judging-scoring">
        <textarea
            id="comment"
            v-model="newGeneralComment"
            :maxlength="3000"
            :rows="5"
            class="form-control"
            placeholder="General comment"
        />

        <hr>

        <div class="card bg-dark">
            <div class="card-header">
                Editing  <b>{{ criteria.name }}</b> for <b>{{ submission.anonymisedAs }}</b>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="score">Score</label>
                    <input
                        id="score"
                        v-model="newScore"
                        type="number"
                        step="1"
                        min="1"
                        :max="criteria.maxScore"
                        class="form-control"
                    >
                </div>
                <div class="form-group">
                    <label for="comment">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        v-model="newComment"
                        :maxlength="3000"
                        :rows="5"
                        class="form-control"
                        placeholder="Criteria specific"
                    />
                </div>
            </div>
            <div class="card-footer">
                <button
                    type="button"
                    class="btn btn-primary"
                    @click.prevent="save()"
                >
                    Save changes
                </button>
            </div>
        </div>
    </div>
    <div v-else class="text-muted">
        Select a score to begin...
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Criteria } from '../../shared/models';
import { CreateJudging, ScopedSubmission } from '../../shared/integration';
import { SAVE, SET_NEW_JUDGING } from '../store/judging-types';

export default defineComponent({
    name: 'JudgingScoring',

    computed: {
        originalJudging (): CreateJudging | null {
            return this.$store.state.judging.originalJudging;
        },

        criteria (): Criteria | undefined {
            return this.originalJudging?.judgingToCriteria?.criteria;
        },

        submission (): ScopedSubmission | undefined {
            return this.originalJudging?.judging?.submission;
        },

        newGeneralComment: {
            get (): string | undefined {
                return this.$store.state.judging.newJudging?.judging.comment;
            },

            set (value) {
                const judging: CreateJudging = this.cloneNewJudging();
                judging.judging.comment = value;
                this.$store.commit('judging/' + SET_NEW_JUDGING, judging);
            },
        },

        newComment: {
            get (): string | undefined {
                return this.$store.state.judging.newJudging?.judgingToCriteria.comment;
            },

            set (value) {
                const judging: CreateJudging = this.cloneNewJudging();
                judging.judgingToCriteria.comment = value;
                this.$store.commit('judging/' + SET_NEW_JUDGING, judging);
            },
        },

        newScore: {
            get (): number | undefined {
                return this.$store.state.judging.newJudging?.judgingToCriteria.score;
            },

            set (value) {
                const judging: CreateJudging = this.cloneNewJudging();
                judging.judgingToCriteria.score = value;
                this.$store.commit('judging/' + SET_NEW_JUDGING, judging);
            },
        },
    },

    methods: {
        async save () {
            await this.$store.dispatch('judging/' + SAVE);
        },

        cloneNewJudging (): CreateJudging {
            return JSON.parse(JSON.stringify(this.$store.state.judging.newJudging));
        },
    },
});
</script>

<style lang="scss">
.judging-scoring {
    position: sticky;
    top: 1.5rem;
}
</style>