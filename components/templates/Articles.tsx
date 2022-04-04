// import NewsArticlePartOne from '../molecules/NewsArticlePartOne';
// import NewsArticlePartTow from '../molecules/NewsArticlePartTow';

import CardNewsArticles from '../atoms/CardNewsArticles';
import NewsArticlePartOne from '../molecules/NewsArticlePartOne';
import NewsArticlePartThree from '../molecules/NewsArticlePartThree';
import NewsArticlePartTow from '../molecules/NewsArticlePartTow';

const Articles = () => {
  return (
    <div className=''>
      <NewsArticlePartOne />
      <NewsArticlePartTow/> 
      <NewsArticlePartThree/>
    </div>
  );
};

export default Articles;
