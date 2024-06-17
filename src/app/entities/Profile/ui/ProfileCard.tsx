import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';

import { Input } from 'shared/ui/Input/Input';
import { Profile, ProfileSchema } from '../model/types/ProfileSchema';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'app/entities/Currency';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean
  readonly?: boolean
  changeLastName?: (value?: string) => void;
  changeFirstName?: (value?: string) => void;
  changeAge?: (value?: string) => void;
  changeCity?: (value?: string) => void;
  changeUsername?: (value?: string) => void;
  changeAvatar?: (value?: string) => void;
  changeCurrency?: (currency?: Currency) => void;
  
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
    readonly = true,
    changeFirstName,
    changeLastName,
    changeAge,
    changeCity,
    changeAvatar,
    changeUsername,
    changeCurrency
  } = props

  const mods: Mods = {
    [cls.editing]: !readonly
  }

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
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && <Avatar size={AvatarSize.L} src={data.avatar} className='gg'/>}
      
      <Input 
        value={data?.username}
        placeholder='username'
        className={cls.input}
        onChange={changeUsername}
        readonly={readonly}
      />
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
      <Input 
        value={data?.avatar}
        placeholder='avatar link'
        className={cls.input}
        onChange={changeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.currencySelect}
        value={data?.currency}
        onChange={changeCurrency}
        readonly={readonly}
      />
 
    </div>
  );
};
