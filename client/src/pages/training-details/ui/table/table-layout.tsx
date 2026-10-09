import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  PropsWithChildren,
} from "react";
import styles from "./table.module.scss";

const Table = ({
  children,
  setsLength,
  ...props
}: ComponentPropsWithoutRef<"table"> & { setsLength: number }) => {
  return (
    <table
      className={styles.table}
      style={{ "--sets": setsLength } as CSSProperties}
      {...props}
    >
      {children}
    </table>
  );
};

const THead = ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => {
  return (
    <thead {...props}>
      <tr>{children}</tr>
    </thead>
  );
};

const THeadTitle = ({ children, ...props }: ComponentPropsWithoutRef<"th">) => {
  return (
    <th className={`${styles.th} ${styles.thTitle}`} scope="col" {...props}>
      {children}
    </th>
  );
};

const TH = ({ children, ...props }: ComponentPropsWithoutRef<"th">) => {
  return (
    <th className={styles.th} scope="col" {...props}>
      {children}
    </th>
  );
};

const TBody = ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => {
  return <tbody {...props}>{children}</tbody>;
};

const TRow = ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => {
  return (
    <tr className={styles.rowClickable} {...props}>
      {children}
    </tr>
  );
};

const THTitleCell = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"th">) => {
  return (
    <th className={styles.titleCell} {...props}>
      {children}
    </th>
  );
};

const TitleContent = ({ children }: PropsWithChildren) => {
  return <div className={styles.titleContent}>{children}</div>;
};

const Thumb = ({ children }: PropsWithChildren) => {
  return <div className={styles.thumb}>{children}</div>;
};

const Title = ({ children }: { children: string }) => {
  return (
    <span className={styles.title} title={children}>
      {children}
    </span>
  );
};

const TDCell = ({ children, ...props }: ComponentPropsWithoutRef<"td">) => {
  return (
    <td className={styles.cell} {...props}>
      {children}
    </td>
  );
};

const TDRowTotal = ({ children, ...props }: ComponentPropsWithoutRef<"td">) => {
  return (
    <td className={`${styles.cell} ${styles.rowTotal}`} {...props}>
      {children}
    </td>
  );
};

const TFoot = ({ children, ...props }: ComponentPropsWithoutRef<"tfoot">) => {
  return (
    <tfoot {...props}>
      <tr>{children}</tr>
    </tfoot>
  );
};

const THFootLabel = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"th">) => {
  return (
    <th className={styles.footLabel} scope="row" {...props}>
      {children}
    </th>
  );
};

const TDFootCell = ({ children, ...props }: ComponentPropsWithoutRef<"td">) => {
  return (
    <td className={styles.footCell} {...props}>
      {children}
    </td>
  );
};

const TDFootTotal = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"td">) => {
  return (
    <td className={`${styles.footCell} ${styles.grandTotal}`} {...props}>
      {children}
    </td>
  );
};

export const ThumbImage = (props: ComponentPropsWithoutRef<"img">) => {
  return <img className={styles.thumbImage} {...props} />;
};

export const SetsTableLayout = Object.assign(Table, {
  THead,
  THeadTitle,
  TH,
  TBody,
  TRow,
  THTitleCell,
  TitleContent,
  Thumb,
  Title,
  TDCell,
  TDRowTotal,
  TFoot,
  THFootLabel,
  TDFootCell,
  TDFootTotal,
});
