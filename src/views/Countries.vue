<template>
    <div>
        <canvas id="myChart" width="2000" height="1000"></canvas>
    </div>
</template>
  
<script>
import CovidChartService from '../services/CovidChartService';
import Cards from '../components/Cards.vue';

export default {
    data() {
        return {
            chartData: null,
            confirmedCases: 0,
            recoveredCases: 0,
            deathCases: 0,
        };
    },
    async mounted() {
        try {
            this.chartData = await CovidChartService.fetchData();
            this.confirmedCases = this.chartData.reduce((sum, entry) => sum + entry.confirmed, 0);
            this.recoveredCases = this.chartData.reduce((sum, entry) => sum + entry.recovered, 0);
            this.deathCases = this.chartData.reduce((sum, entry) => sum + entry.deaths, 0);
            this.createChart();
        } catch (error) {
            console.error('Erro durante a montagem:', error);
        }
    },
    methods: {
        createChart() {
            if (!this.chartData) return;
            const countries = this.chartData.map((entry) => entry.country);
            const confirmedCases = this.chartData.map((entry) => entry.confirmed);
            const ctx = document.getElementById('myChart').getContext('2d');
            CovidChartService.createChart(ctx, countries, confirmedCases);
        },
    },
    components: { Cards },
};
</script>
  