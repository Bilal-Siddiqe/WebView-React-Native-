import { } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView source={{ uri: 'https://www.npmjs.com/package/react-native-webview' }} />
  )
}