import { View, InfoList, Logo } from '../../../components';
import { Author, Contact, Github, Link } from '../../../data';
import Package from '../../../../package.json';
import style from '../index.scss';

const { Content, Footer, Split } = View;
const Version = Package.version;

export default () => {
  const mapInfo = (title, data) => [
    <Split key={title + 'split'} className={style.title} id={title} />,
    <div key={title + 'list'} className={style.list}>
      {data.map(item => <InfoList key={item.title} title={item.title} desc={item.desc} />)}
    </div>,
  ];
  return [
    <Content key="content" className={style.content}>
      <Split className={style.title} id="setting.about.version" />
      <div className={style.logo}>
        <Logo size={300} />
      </div>
      <div className={style.list}>
        <InfoList title="Version" desc={Version} />
      </div>
      {mapInfo('setting.about.author', Author)}
      {mapInfo('setting.about.contact', Contact)}
      {mapInfo('setting.about.git', Github)}
      {mapInfo('setting.about.link', Link)}
    </Content>,
    <Split key="split" />,
    <Footer className={style.foot} key="footer" />,
  ];
};