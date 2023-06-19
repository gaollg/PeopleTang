import { IApi } from 'umi';

export default (api: IApi) => {
  let config = `
  <script>
  </script>
  `;
  // config += `<script src="https://unpkg.com/vconsole@3.15.0/dist/vconsole.min.js"></script>
  // <script>
  // var vConsole = new window.VConsole();
  // </script>
  // `;

  api.modifyHTML(($) => {
    $('head').append([
      // `<script type="text" id="configStart"></script>`,
      `<!-- CHANGAN-CONFIG-START -->`,
      `${config}`,
      `<!-- CHANGAN-CONFIG-END -->`,
    ]);
    return $;
  });
};
