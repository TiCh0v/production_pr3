import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticalPage.module.scss'
import { memo, useEffect } from 'react'
import { Article } from 'app/entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleReducer } from 'app/entities/Article/model/slice/articleSlice'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'app/entities/Comment'
import { articleCommentReducer, getArticleComments } from 'pages/ArticlePage/model/slices/articleCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/ArticlePage/model/selectors/getArticleCommentsSelectors'
import { fetchComments } from 'pages/ArticlePage/model/services/fetchComments'

interface ArticalPageProps {
    className?: string,
}


const reducers: ReducersList = {
  article: articleReducer,
  articleComments: articleCommentReducer
}



const ArticalPage = ({className}: ArticalPageProps) => {

  const { id } = useParams<{id: string}>();
  const dispatch = useDispatch();


  const comments = useSelector(getArticleComments.selectAll)


  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  useEffect(() => {
    dispatch(fetchComments(id))
  }, [])


  if (!id) {
    return (
      <div className={classNames(cls.ArticalPage, {}, [className])}>
        Article not found
      </div>
    )
  }

  return (
    <DynamicModuleLoader 
      reducers={reducers} 
      unmountRemove={true}
    >
      <div className={classNames(cls.ArticalPage, {}, [className])}>
        <Article id={id}/>
        <Text title='Comments'/>
        <CommentList 
          comments={comments} 
          error={commentsError}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticalPage)