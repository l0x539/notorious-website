import {FC} from 'react';
import {INews} from '../../lib/types';
import NewsArticlePartOne from '../molecules/NewsArticlePartOne';
import NewsArticlePartThree from '../molecules/NewsArticlePartThree';
import NewsArticlePartTow from '../molecules/NewsArticlePartTow';

const Article: FC<{
  article: INews
}> = ({
  article,
}) => {
  return (
    <div className=''>
      <NewsArticlePartOne />
      <NewsArticlePartTow article={article}/>
      <NewsArticlePartThree/>
    </div>
  );
};

export default Article;
