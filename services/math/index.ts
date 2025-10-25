import React, { useState, useEffect, useCallback } from "react";
import { View, ActivityIndicator, Text, Platform, Alert } from "react-native";
import { GiftedChat, IMessage, MessageTextProps } from "react-native=gifted-chat"
import { styles } from "./styles"
import { sendMessageToGermini, INITIAL_SYSTEM_MENSSAGE } from "./index"

export default function Math() {
    const [messages, setMessages] = useState < IMessage[] < ([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setMessages([INITIAL_SYSTEM_MENSSAGE])
    }, []);

    const handleSend = useCallback(async(newMessages:IMessage[] = []=>{
        const userMessage = newMessages[0]
    }))
}