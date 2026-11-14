// 页面顶部、底部共用的菜单；修改 text 即可改变按钮文字。
// navi1 指向首页锚点，navi2 指向独立页面。
window.GUIDE_NAVIGATION = [
  {
    name: 'navi1',
    links: [
      { href: 'gekichumainet', text: '什么是GEKICHUMAI-NET' },
      { href: 'registration', text: '使用方法' },
    ],
  },
  {
    name: 'navi2',
    links: [
      { href: 'activate/', text: '激活 ALL.NET 利用权' },
      { href: 'import/', text: '导入存档' },
      { href: 'ogklink/', text: 'ONGEKI LINK' },
	  { href: 'cardmaker/', text: 'CARD MAKER'},
      { href: 'agreement/', text: '使用条款' },
      { href: 'use-right/', text: '使用权说明' },
      { href: 'environment/', text: '推荐环境' },
      { href: 'faq/', text: 'FAQ' },
    ],
  },
];

// 按页面地址高亮，菜单增删或调换顺序后仍可正确匹配。
// 同时兼容 /agreement/ 与 /agreement/index.html 两种预览地址。
const guidePagePath = window.location.pathname
  .replace(/\/index\.html$/, '/')
  .replace(/\/+$/, '') || '/';
window.GUIDE_NAVIGATION.forEach(group => {
  group.links.forEach(link => {
    link.current = group.name === 'navi2' && !link.target &&
      guidePagePath === '/' + link.href.replace(/\/+$/, '');
  });
});
