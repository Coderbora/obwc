<template>
    <div class="card card-section h-100">
        <div class="card-body d-flex flex-column justify-content-between">
            <div class="home-logo" />

            <div class="px-2">
                <div v-if="schedule" class="bg-white text-dark rounded-pill p-1 text-center text-uppercase fw-bold my-2">
                    {{ formatDate(schedule.announcement) }} - {{ formatDate(schedule.results) }}
                </div>

                <a
                    class="box-link"
                    href="https://osu.ppy.sh/community/forums/topics/1312490"
                    target="_blank"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Schedule } from '../store/main';

export default defineComponent({
    name: 'HomeInfo',

    computed: {
        schedule (): Schedule | undefined {
            return this.$store.getters.schedule;
        },
    },

    methods: {
        formatDate (date: Date | null): string {
            if (!date) return '--';

            return new Date(date).toLocaleString('en-US', { month: 'short', day: '2-digit' });
        },
    },
});
</script>

<style lang="scss">

.home-logo {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../assets/home_obwc.png');
    max-width: 100%;
    min-height: 500px;
    height: auto;
}

.box-link {
    display: block;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('../assets/home_link.png');
    max-width: 100%;
    min-height: 80px;
    height: auto;
    transition: background-image 0.2s ease-in-out;

    &:hover {
        background-image: url('../assets/home_link_hover.png');
    }
}

</style>
