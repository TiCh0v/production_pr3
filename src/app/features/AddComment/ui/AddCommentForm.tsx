import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/addCommentFormSelectors'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentActions, addCommentReducer } from '../model/slice/addCommentSlice'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { sendComment } from '../model/services/sendComment'


interface AddcommentFormProps {
    className?: string,
}

const reducers: ReducersList = {
    addComment: addCommentReducer
}

const AddCommentForm = ({className}: AddcommentFormProps) => {

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentActions.setText(value))
    }, [dispatch])


    const onCommentSend = useCallback(() => {
        dispatch(sendComment())
    }, [dispatch])

    return (

        <DynamicModuleLoader 
            unmountRemove={true} 
            reducers={reducers}
        >
            <div className={cls.AddCommentForm}>
                <Input
                    className={cls.Input}
                    placeholder='Whrite your comment'
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button 
                    theme={ButtonTheme.OUTLINE}
                    size={ButtonSize.M}
                    onClick={onCommentSend}
                >
                    Add
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm