<template>
	<div class="layout-footer">
		<div class="footer-box">
			<div class="footer-left">
				<div class="living-tools">
					<el-button size="small">我要开播</el-button>
					<el-button size="small">平台规范</el-button>
					<el-button size="small">主播工具</el-button>
				</div>
				<div class="help-link">
					<router-link to="/" target="_blank">
						商务合作&nbsp;/
					</router-link>
					<router-link to="/" target="_blank">
						意见反馈&nbsp;/
					</router-link>
					<router-link to="/" target="_blank">
						版权投诉&nbsp;/
					</router-link>
					<router-link to="/" target="_blank">
						联系我们&nbsp;/
					</router-link>
					<router-link to="/" target="_blank">
						关于我们&nbsp;/
					</router-link>
					<router-link to="/" target="_blank">
						联系客服&nbsp;/
					</router-link>
				</div>
				<div class="copyright-information">
					2020明升网络科技有限公司｜渝ICP备19013564号-4
					｜违法不良举报QQ：3333333338｜客服电话：010-52333333
				</div>
			</div>

			<div class="footer-right">
				<div class="footer-qr-app qr">
					<vue-qr
						text="http://facebook.github.io/react/"
						:size="68"
						:margin="0"
					/>
					<p>足球APP</p>
				</div>
				<div class="footer-qr-focus qr">
					<vue-qr
						text="http://facebook.github.io/react/"
						:size="68"
						:margin="0"
					/>
					<p>关注我们</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueQr from 'vue-qr';
export default {
	name: 'footer',
	data() {
		return {};
	},
	components: { VueQr },
};
</script>

<style scoped lang="scss">
.layout-footer {
	width: 100%;
	height: 80px;
	height: 127px;
	background: #fff;

	display: flex;
	align-items: center;
	justify-content: center;

	.footer-box {
		width: 1200px;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.footer-left {
			.living-tools {
				display: flex;
				align-items: center;
				justify-content: flex-start;

				.ant-btn {
					margin-right: 10px;
				}
			}

			.help-link {
				display: flex;
				align-items: center;
				justify-content: flex-start;

				margin: 18px 0;

				a {
					display: inline-block;
					margin-right: 10px;
					color: #605656;
					font-size: 12px;
					text-decoration: none;
					&:hover {
						color: #f8413d;
					}
				}
			}

			.copyright-information {
				color: #9f9f9f;
				font-size: 12px;
			}
		}

		.footer-right {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.qr {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				p {
					margin-top: 10px;
					color: #605656;
					font-size: 12px;
				}
			}

			.footer-qr-focus {
				margin-left: 40px;
			}
		}
	}
}
</style>
