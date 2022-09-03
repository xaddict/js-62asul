import lume from 'lume/mod.ts';
import base_path from 'lume/plugins/base_path.ts';
import relative_urls from 'lume/plugins/relative_urls.ts';
import resolve_urls from 'lume/plugins/resolve_urls.ts';
import sass from 'lume/plugins/sass.ts';
import postcss from 'lume/plugins/postcss.ts';

const site = lume();

site.use(base_path());
site.use(relative_urls());
site.use(resolve_urls());
site.use(sass());
site.use(postcss());

export default site;
