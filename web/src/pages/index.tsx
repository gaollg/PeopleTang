import { useState } from 'react';

export default function HomePage() {
  if (!window.ethereum) {
    return <div>未安装钱包, 请安装钱包后重试</div>;
  }

  return <div></div>;
}
