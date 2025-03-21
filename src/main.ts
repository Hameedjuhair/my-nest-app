import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '0.0.0.0'); // Bind to all network interfaces
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

