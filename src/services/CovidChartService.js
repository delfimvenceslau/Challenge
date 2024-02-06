import Chart from 'chart.js/auto';
import { getCountriesData } from '../api/covid_api';

export default {
  async fetchData() {
    try {
      return await getCountriesData();
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  },

  createChart(ctx, countries, confirmedCases) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [{
          label: 'Casos Confirmados',
          data: confirmedCases,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive : true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
};
