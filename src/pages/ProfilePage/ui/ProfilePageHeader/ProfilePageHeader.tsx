import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getReadOnly } from 'app/entities/Profile/model/selectors/getReadOnly/getReadOnly'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions } from 'app/entities/Profile'
import { updateProfileData } from 'app/entities/Profile/model/services/updateProfileData/updateProfileData'
import { getUserAuthData } from 'app/entities/User'
import { getProfileData } from 'app/entities/Profile/model/selectors/getProfileData/getProfileData'
//

interface ProfilePageHeaderProps {
  className?: string,
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
const readonly = useSelector(getReadOnly);
const dispatch = useAppDispatch();

const onEdit = useCallback(() => {
  dispatch(profileActions.setReadonly(false));
}, [dispatch]);

const onCancel = useCallback(() => {
  dispatch(profileActions.cancelEdit());
}, [dispatch]);

const onSave = useCallback(() => {
  dispatch(updateProfileData());
  dispatch(profileActions.setReadonly(true));
}, [dispatch]);

const authData = useSelector(getUserAuthData);
const thisProfileData = useSelector(getProfileData);

const editable = authData?.id === thisProfileData?.id;

return (
  <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
    <p>Profile</p>
    {editable && (
      <div>
        {readonly ? (
          <Button 
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
            onClick={onEdit}
          >
            Edit
          </Button>
        ) : (
          <>      
            <Button 
              theme={ButtonTheme.OUTLINE_RED}
              className={cls.editBtn}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button 
              theme={ButtonTheme.OUTLINE}
              className={cls.editBtn}
              onClick={onSave}
            >
              Save
            </Button>
          </>
        )}
      </div>
    )}
  </div>
);
};
