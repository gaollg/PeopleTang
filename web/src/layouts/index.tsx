import { Link, Outlet } from 'umi';
import styles from './index.less';
import { Menu, MenuProps } from 'antd';

export default function Layout() {
  const items: MenuProps['items'] = [
    {
      label: '测试币水龙头',
      key: 'https://mumbaifaucet.com/',
    },
    {
      label: 'Github',
      key: 'https://github.com/gaollg/PeopleTang',
    },
  ];
  return (
    <div className={styles.navs}>
      <Menu
        onClick={(item) => {
          console.log(item);
          window.open(item.key);
        }}
        mode="horizontal"
        items={items}
      />
      <div className="h-4"></div>
      <Outlet />
    </div>
  );
}
