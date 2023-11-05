import { INestApplication } from "@nestjs/common";

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class Swagger {
  static build(app: INestApplication): void {
    const documentBuilder = new DocumentBuilder();
    const documentWithConfig = this.baseConfig(documentBuilder).build();

    const documentApiObject = SwaggerModule.createDocument(app, documentWithConfig);

    SwaggerModule.setup('documentation', app, documentApiObject, {
      customSiteTitle: 'Base Template API'
    })
  }

  private static baseConfig(document: DocumentBuilder): DocumentBuilder {
    document.setTitle('Base Template API');
    document.setVersion('1.0.0');
    document.addTag('base_tag', 'Base Tag');

    return this.serverConfig(document);
  }

  private static serverConfig(document: DocumentBuilder): DocumentBuilder {
    document.addServer('http://localhost:3000', 'LocalHost');

    return document;
  }
}