import { Text } from '@nextui-org/react';

type Props = {
  overrideOption?: number;
};

const NoResults = ({ overrideOption }: Props) => {
  const options = [
    'If an item does not appear in our records, it does not exist.',
    "These are not the results you're looking for.",
    'Perhaps the archives are incomplete.',
    "I've got a bad feeling about this.",
  ];

  return (
    <>
      <Text
        h3
        color='primary'
        css={{ textAlign: 'center', paddingTop: '1rem' }}
      >
        No Results Found
      </Text>
      <Text
        color='primary'
        css={{ textAlign: 'center', paddingBottom: '1rem' }}
      >
        {
          options[
            !overrideOption ? Math.floor(Math.random() * 4) : overrideOption
          ]
        }
      </Text>
    </>
  );
};

export default NoResults;
