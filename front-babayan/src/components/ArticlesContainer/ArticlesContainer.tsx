import { FC, useState } from 'react';
import { ArticleCard } from '../ArticleCard';
import { ArticleData, IArticleCard } from '../../utils/types/types';
import { useStyles } from './ArticleContainer.styles';
import { Modal } from '../Modal';
interface ArticlesContainerProps {
  data: ArticleData[];
}
const ArticlesContainer: FC<ArticlesContainerProps> = ({ data }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<IArticleCard | null>(null);
  const openModal = (card: IArticleCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };
  return (
    <div className={classes.root}>
      {data?.length &&
        data.map((card: ArticleData) => (
          <div key={card.title} onClick={() => openModal(card)}>
            <ArticleCard {...card} />
          </div>
        ))}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={classes.modalContainer}>
            <h2>{selectedCard?.title}</h2>
            <div>
              <img src={selectedCard?.img_2x} alt="bigger pic" />
            </div>
            <p>{selectedCard?.text}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ArticlesContainer;
