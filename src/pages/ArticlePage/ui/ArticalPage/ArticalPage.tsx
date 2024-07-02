import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticalPage.module.scss'
import { memo } from 'react'
import { Article } from 'app/entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleReducer } from 'app/entities/Article/model/slice/articleSlice'
import { useParams } from 'react-router-dom'
//

interface ArticalPageProps {
    className?: string,
}


const reducers: ReducersList = {
  article: articleReducer
}

const ArticalPage = ({className}: ArticalPageProps) => {

  const { id } = useParams<{id: string}>();

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
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticalPage)