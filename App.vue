<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
 	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';
	
	/*每个页面公共css */
</style>
