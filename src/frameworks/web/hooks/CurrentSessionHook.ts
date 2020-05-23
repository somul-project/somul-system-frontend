import { useEffect, useState } from 'react';
import ILoginSession from 'interfaces/service/graphql/schema/ILoginSession';
import CurrentSessionRequest from 'service/request/CurrentSessionRequest';

export default function useCurrentSession(): [
  boolean,
  ILoginSession | undefined,
  (onlyLocal?: boolean) => void,
] {
  const [currentUser, setCurrentUser] = useState<ILoginSession | undefined>(undefined);
  const [isLoaded, setLoaded] = useState(false);

  const revoke = (onlyLocal: boolean = true) => {
    setCurrentUser(undefined);

    if (!onlyLocal) {
      CurrentSessionRequest.logout();
    }
  };

  const fetchSession = async () => {
    try {
      const session = await CurrentSessionRequest.getSession();
      const resultData = session.data!;
      setCurrentUser(resultData.result);
      // eslint-disable-next-line no-empty
    } catch {}

    setLoaded(true);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return [isLoaded, currentUser, revoke];
}
