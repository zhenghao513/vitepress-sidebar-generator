import { readdirSync, readFileSync } from 'fs';

export default function main(dir) {
  /**
   *
   * @type {import('vitepress/types').DefaultTheme.Sidebar}
   */
  const sidebar = [];

  /**
   * @type {string}
   * 相对于项目根目录，存储 markdown 页面的目录。
   */
  const srcDir = dir.slice(dir.indexOf('/src') + 4);
  try {
    const files = readdirSync(dir);
    for (const file of files) {
      const content = readFileSync(`${dir}/${file}`, 'utf-8');
      const text = content.split('\r\n')[0].slice(2);
      const link = `${srcDir}/${file.split('.')[0]}`;
      sidebar.push({
        text,
        link,
      });
    }

    console.log(sidebar);
  } catch (error) {
    console.log(error.message);
  }
}

/**
 *
 * @type {string}
 * 要打印的目录，不带有尾部斜线。
 */
const dir = '';
main(dir);
