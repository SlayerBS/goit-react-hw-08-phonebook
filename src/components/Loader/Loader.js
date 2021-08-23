import Loader from "react-loader-spinner";

import styles from "./Loader.module.css";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpiner = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />;
    </div>
  );
};

export default LoaderSpiner;
