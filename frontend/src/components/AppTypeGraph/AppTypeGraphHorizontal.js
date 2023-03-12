import { useState, useEffect, useContext } from 'react';
import ReposContext from '../../context/repos';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './AppTypeGraphHorizontal.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AppTypeGraphHorizontal = () => {

  const [appType, setAppType] = useState(null);

  const {repoData} = useContext(ReposContext);

  async function getTypes() {
    // -------- HELPER FUNCTION TO PULL JUST THE TOPICS FROM EACH REPO AND STORE IT AS AN ARR -------- vv
    const extractTopics = (repos) => {
      return repos[0].rawRepoData.map((repo) => {
        return repo.topics[0];
      });
    };
    // -------- HELPER FUNCTION TO PULL JUST THE TOPICS FROM EACH REPO AND STORE IT AS AN ARR -------- ^^
    //
    //
    // ---------------------------- FUNCTION TO CALCULATE FRONTEND, FULLSTACK, ETC. ----------------------------vv
    const calculateAppTypes = (fetchedRepos) => {
      const topics = {
        fullstack: 1,
        frontend: 0,
        backend: 1,
      };

      extractTopics(fetchedRepos).forEach((topic) => {
        switch (topic) {
          case "fullstack":
            topics.fullstack += 1;
            break;
          case "frontend":
            topics.frontend += 1;
            break;
          case "backend":
            topics.frontend += 1;
            break;
          default:
            break;
        }
      });

      return topics;
    };
    // ---------------------------- FUNCTION TO CALCULATE FRONTEND, FULLSTACK, ETC. ----------------------------^^

    const finalTypesList = calculateAppTypes(repoData)

    const labels = [...Object.keys(finalTypesList)];

    const data = {
      labels,
      datasets: [
        {
          label: "Applications Made",
          data: [...Object.values(finalTypesList)],
          backgroundColor: "rgba(203, 203, 203, 0.5)",
          barThickness: 40,
          responsive: true,
          maintainAspectRation: false,
        },
      ],
    };

    setAppType(data);
  }

  const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRation: false,
  plugins: {
    title: {
      display: true,
      text: 'Application Types',
    },
  },
};


  useEffect(() => {
    getTypes()
  }, [])


  return (
    <div className='chart-horizontal'>
      <div id='bar-chart-container-horizontal' style={{position: 'relative', height: '100%'}}>
        { appType && (
        <Bar options={options} data={appType} id='bar-chart-horizontal'/>
        )}
      </div>
    </div>
  );
}


export default AppTypeGraphHorizontal;
