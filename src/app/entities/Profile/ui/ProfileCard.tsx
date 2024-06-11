import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';

import { useSelector } from 'react-redux';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';

import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      {data ? (
        <>
          {JSON.stringify(data)}
          <Input placeholder={data.first} />
        </>
      ) : (
        <p>No profile data available</p>
      )}
    </div>
  );
};
