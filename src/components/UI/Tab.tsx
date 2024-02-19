import React from 'react';

type Props = {
  title: string
}
const Tab = ({ title }: Props) => {
  return (
    <div >
      {title}
    </div>
  );
};

export default Tab;
