✅ Resumo do Projeto: App de Flashcards com IA
🧠 Nome do projeto:

FlashMind (pode ser alterado depois)

🎯 Objetivo do App

Criar um aplicativo mobile de estudos onde o usuário insere um texto (ex: matéria, resumo, artigo) e a IA gera automaticamente flashcards com perguntas e respostas. Esses cards serão exibidos em formato interativo para revisão ou quizzes.

🔧 Tecnologias que vamos usar
Área	Ferramenta
Frontend	React Native com Expo
IA	OpenAI API (GPT-4 ou GPT-3.5-turbo)
Armazenamento local	AsyncStorage (inicial)
Navegação	@react-navigation/native, Stack Navigator
HTTP Requests	axios
Animações	Animated (inicialmente), depois talvez Reanimated
UI (opcional)	react-native-paper ou nativewind (você escolhe)
📱 Funcionalidades (MVP)

Home Screen

Lista de baralhos salvos (com título)

Botão para criar novo

Criar baralho

TextArea para colar o conteúdo

Botão "Gerar flashcards"

Chamada à API da OpenAI com prompt adequado

Exibir loading com animação

Estudar flashcards

Interface interativa (virar card, swipe ou botão)

Ver pergunta > resposta

Marcar como "Lembrado" ou "Errei"

Salvar localmente

Nome do baralho + flashcards salvos no AsyncStorage

✨ Funcionalidades futuras (opcionais)

Modo Quiz com pontuação

Compartilhar decks com link

Revisão espaçada (como Anki)

Login com conta Google (Firebase Auth)

Backup na nuvem (Firebase / Supabase)

OCR: gerar flashcards a partir de imagem/texto de foto

Suporte a voz: gerar flashcards de áudio transcrito (Whisper)

🧠 Prompt inicial para a IA
Gere flashcards de estudo no formato JSON com base no texto abaixo. 
Cada flashcard deve conter uma "pergunta" e uma "resposta".

Texto:
"[texto do usuário]"

Formato de saída:
[
  { "pergunta": "...", "resposta": "..." },
  ...
]

🔨 Progresso atual
Etapa	Status
Escolha da ideia	✅ Concluído
Definição da estrutura do app	✅ Concluído
Nome do app	✅ FlashMind (temporário)
Setup inicial com Expo	🟡 Em progresso por você
Animação de clique/interação	🔜 A definir após estrutura
Integração com IA (OpenAI)	🔜 Depois da interface básica
🔜 Próximos passos (sugestão)

 Criar projeto Expo com estrutura inicial de telas

 Navegação com Stack Navigator (react-navigation)

 Criar tela de criação de baralho

 Implementar chamada de teste à API OpenAI (mock de texto fixo)

 Mostrar os flashcards gerados

 Armazenar localmente

 Animar cards (virar / swipe)

🧭 Como você pretende trabalhar

“Vou começar com o esqueleto inicial, se tiver dúvidas te chamo.”

Perfeito! Esse resumo vai servir como mapa de referência, então se quiser, posso sempre reutilizar ele nas conversas ou te lembrar de onde paramos.