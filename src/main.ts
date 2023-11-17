import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);

  const cors=require("cors");
  const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  }
  app.use(cors(corsOptions))

  const config = new DocumentBuilder()
      .setTitle('исрпо')
      .setDescription('Документация REST API')
      .setVersion('1.0.0')
      .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log('Server started on ' + PORT + ' port'))
}
bootstrap();
