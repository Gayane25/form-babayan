import { FC } from 'react';
import { useStyles } from './ArticleCard.styles';
import { ArticleData } from '../../utils/types/types';

const ArticleCard: FC<ArticleData> = ({
  title,
  text,
  tags,
  autor,
  img,
  date,
  views,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={() => {}}>
      <div className={classes.imgContent}>
        <img src={img} alt={'post image'} />
      </div>
      <div className={classes.infoContent}>
        <span className={classes.redText}>{tags}</span>
        <span className={classes.title}>{title}</span>
        <span className={classes.flex}>
          <span className={classes.author}>{autor}</span>
          <ul>
            <li className={classes.greyText}>{date}</li>
            <li className={classes.greyText}>{views}</li>
          </ul>
        </span>
        <div className={classes.greyText}>{text}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
