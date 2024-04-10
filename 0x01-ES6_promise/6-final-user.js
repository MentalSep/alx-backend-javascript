import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      values.map((element) => ({
        status: element.status,
        value: element.status === 'fulfilled' ? element.value : `${element.reason}`,
      }));
    });
}
