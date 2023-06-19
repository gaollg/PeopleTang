import { useState } from 'react';
import ReadMe from './components/ReadMe';
import Todo from './components/Todo';

export default function HomePage() {
  if (!window.ethereum) {
    return <div>未安装 MetaMask 钱包, 请安装钱包后重试</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ReadMe />
        <Todo />
      </div>
    </div>
  );
}
