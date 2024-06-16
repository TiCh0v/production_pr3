import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';

import { Input } from 'shared/ui/Input/Input';
import { Profile, ProfileSchema } from '../model/types/ProfileSchema';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean
  readonly?: boolean
  changeLastName: (value?: string) => void;
  changeFirstName: (value?: string) => void;
  changeAge: (value?: string) => void;
  changeCity: (value?: string) => void;

}

export const ProfileCard = (props: ProfileCardProps) => {
  // const profileData = useSelector(getProfileData);
  // const error = useSelector(getProfileError);
  // const isLoading = useSelector(getProfileIsLoading);

  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    changeFirstName,
    changeLastName,
    changeAge,
    changeCity,
  } = props

  if(isLoading) {
    return(
      <div className={classNames(cls.ProfileCard, {}, [className])}>
        loading
      </div>
    )
  }

  if(error) {
    return(
      <div className={classNames(cls.ProfileCard, {[cls.error]:true}, [className])}>
        error
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <Input 
        value={data?.first}
        placeholder='name'
        className={cls.input}
        onChange={changeFirstName}
        readonly={readonly}
      />
      <Input 
        value={data?.lastname}
        placeholder='lastname'
        className={cls.input}
        onChange={changeLastName}
        readonly={readonly}
      />
      <Input 
        value={data?.age}
        placeholder='age'
        className={cls.input}
        onChange={changeAge}
        readonly={readonly}
      />
      <Input 
        value={data?.city}
        placeholder='city'
        className={cls.input}
        onChange={changeCity}
        readonly={readonly}
      />

    </div>
  );
};
