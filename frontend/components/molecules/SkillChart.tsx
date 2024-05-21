import React from "react";

// scss
import styles from "./styles/SkillChart.module.scss";

// chart
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.jsのコンポーネントを登録する
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillChart = () => {
  const data1 = {
    labels: [
      "HTML",
      "CSS/Sass",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
    ],
    datasets: [
      {
        label: "Frontend",
        data: [80, 70, 60, 50, 70, 60],
        backgroundColor: "rgb(0, 216, 0, 0.1)",
        borderColor: "rgb(0, 255, 0)",
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Go", "Rust", "C", "C++", "Python", "Java"],
    datasets: [
      {
        label: "Backend",
        data: [55, 30, 40, 30, 30, 20],
        backgroundColor: "rgb(0, 216, 0, 0.1)",
        borderColor: "rgb(0, 255, 0)",
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    labels: [
      "Figma",
      "Docker",
      "Postman",
      "DaVinci Resolve",
      "Blender",
      "iTerm",
    ],
    datasets: [
      {
        label: "Tools",
        data: [80, 60, 50, 80, 40, 70],
        backgroundColor: "rgb(0, 216, 0, 0.1)",
        borderColor: "rgb(0, 255, 0)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 10,
        suggestedMax: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.3)", // グリッドラインの色を調整
          backgroundColor: "transparent",
        },
        ticks: {
          color: "gray", // ティックの色を白に設定
          backdropColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // 凡例のテキスト色を白に設定
        },
      },
      tooltip: {
        titleColor: "gray", // ツールチップのタイトル色を白に設定
        bodyColor: "white", // ツールチップのボディ色を白に設定
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.flexBox}>
        <div className={styles.chart}>
          <Radar data={data1} options={options} />
        </div>
        <div className={styles.chart}>
          <Radar data={data2} options={options} />
        </div>
        <div className={styles.chart}>
          <Radar data={data3} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SkillChart;
