import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue';
//引入插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver, ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const path = require('path');
export default defineConfig({
    plugins: [
        vue(),
        //配置插件
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router']
        }),
        Components({
            resolvers: [ElementPlusResolver(), AntDesignVueResolver()],
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api':'http://testapi.xuexiluxian.cn'
        }
    }
});