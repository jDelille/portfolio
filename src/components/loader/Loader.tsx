import styles from "./Loader.module.scss";

type LoaderProps = {
  backgroundColor?: string;
};

export default function Loader({ backgroundColor }: LoaderProps) {
  return (
    <>
      <div
        className={styles.loader}
        style={{
          background: backgroundColor,
        }}
      ></div>
      <div className={styles.loaderAfter}></div>
    </>
  );
}
