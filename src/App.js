import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui';
import { Input, FormItem, Button, PanelHeader, Panel, FormLayout, FormLayoutGroup, ButtonGroup } from '@vkontakte/vkui';
import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {

	const textInput = React.createRef();

	bridge.send("VKWebAppGetClientVersion").then(x => console.log(x))
	const clear = () => (textInput.current.value = "");
	return (
		<Panel id="input">
			<Group>
				<FormLayout>
					<FormLayoutGroup mode="vertical" style={{ maxWidth: 328 }}>
						<FormItem top="Фамилия" style={{ paddingBottom: 10 }}>
							<Input type="text" defaultValue="Петров" />
						</FormItem> 
						<FormItem top="Имя">
							<Input type="text" defaultValue="Петр" />
						</FormItem>

					</FormLayoutGroup>
				</FormLayout>
				<FormLayout>
					<ButtonGroup mode="vertical" gap="m" style={{ paddingTop: 15 }}>
						<Button size="l" appearance="accent" stretched>
							Разрешить
						</Button>
					</ButtonGroup>
				</FormLayout>
			</Group>
		</Panel>
		);
}

export default App;
