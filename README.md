<p align="center">
  <img src="https://developers.facebook.com/assets/uploads/product-icons/whatsapp-business.svg" width="120" alt="WhatsApp Logo" />
</p>

<h1 align="center">WhatsApp Bot - Meta API Webhook Handler</h1>

<p align="center">
  A NestJS application for interfacing with the WhatsApp Business Cloud API through Meta's Webhooks
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  <a href="https://developers.facebook.com/docs/whatsapp" target="_blank"><img src="https://img.shields.io/badge/API-WhatsApp-25D366.svg" alt="WhatsApp API" /></a>
</p>

## Description

This project is a webhook handler for the WhatsApp Business Cloud API built using the [NestJS](https://github.com/nestjs/nest) framework. It handles webhook verification challenges and provides endpoints for sending messages through the WhatsApp API.

## Features

- 🔐 **Webhook Verification**: Handles the webhook verification challenge from Meta's WhatsApp API
- 📨 **Message Sending**: Sends formatted text messages to WhatsApp numbers
- 🛡️ **Security**: Uses environment variables to secure API keys and tokens

## Prerequisites

- Node.js (v18 or later)
- A Meta Developer account with WhatsApp Business API access
- WhatsApp Business Phone Number ID
- WhatsApp API Key (Token)
- Webhook Verification Key

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_API_KEY=your_api_key
WHATSAPP_CHALLENGE_kEY=your_verification_key
```

## Project Setup

```bash
# Install dependencies
$ npm install
```

## Running the Application

```bash
# Development
$ npm run start

# Watch mode (recommended during development)
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Testing

```bash
# Unit tests
$ npm run test

# End-to-end tests
$ npm run test:e2e

# Test coverage report
$ npm run test:cov
```

## API Endpoints

### WhatsApp Webhook

- **GET /whatsapp/webhook**: Webhook verification endpoint
  - Handles the initial challenge sent by Meta when setting up the webhook
  - Required query parameters: `hub.mode`, `hub.verify_token`, `hub.challenge`

- **POST /whatsapp/webhook**: (To be implemented) Handles incoming webhook events from WhatsApp

### Message Sending

- **POST /whatsapp/send**: (To be implemented) Send a message to a WhatsApp number
  - Required body parameters: `to` (recipient's phone number), `message` (text to send)

## Useful Resources

- [WhatsApp Business API Documentation](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [Meta Developers Platform](https://developers.facebook.com/)
- [NestJS Documentation](https://docs.nestjs.com)
- [Azure App Service Documentation](https://docs.microsoft.com/azure/app-service/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is [MIT licensed](LICENSE).
