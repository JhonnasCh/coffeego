Plan del prototipo CoffeeGo (HTML)

Formato: una sola página HTML con CSS y JavaScript, sin servidor. La mantendría en un solo archivo, con diseño de móvil, para que se vea como una app dentro de Unisimón. Los datos se guardan en localStorage, así que el prototipo conserva los pedidos al recargar.

1. Vistas del estudiante
Inicio / Menú: categorías (Bebidas calientes, Bebidas frías, Almuerzos, Snacks, Postres), buscador y tarjetas de producto con precio y disponibilidad (disponible o agotado).
Detalle del producto: descripción, cantidad y una nota opcional (por ejemplo, “sin azúcar”).
Carrito: edición de cantidades, total y selección de hora de recogida.
Confirmación: código QR real generado con una librería (qrcode.js), con el número de orden y el resumen.
Mis pedidos: historial y estado de cada orden (Recibido → Preparando → Listo → Entregado), que se actualiza solo.
2. Vistas del personal y administrador (se cambia de rol con un botón)
Cola de pedidos: el personal ve las órdenes entrantes y avanza su estado.
Validar QR: campo para ingresar o pegar el código, o una simulación de escaneo. Al validarlo, la orden pasa a “Entregado”.
Gestión de productos: crear, editar, eliminar y marcar como agotado, con precio y categoría.
3. Datos y contenido
Unos 20 a 25 productos de cafetería colombiana (tinto, café con leche, jugos naturales, empanadas, pan de bono, almuerzo del día, etc.), con precios en COP.
Imágenes con emojis o ilustraciones simples. Así evitamos fotos externas y el prototipo funciona sin conexión.
Usuario de ejemplo (estudiante de Unisimón) y un par de pedidos de demostración.
4. Lógica
Estados de la orden con avance automático simulado y también manual desde el panel del personal.
Número de orden único y QR que codifica ese número junto con un token.
Tiempo de espera estimado según los pedidos en cola.
Restricciones del alcance: sin pagos en línea y sin domicilios. El pago se hace al reclamar en el mostrador, y se indica así en la interfaz.
5. Diseño
Estilo moderno y cálido, con paleta café, crema y un acento naranja. Tipografía legible, barra de navegación inferior, animaciones suaves y modo claro y oscuro.
Se ve como un teléfono centrado cuando se abre en el computador y ocupa toda la pantalla en el móvil.
Marca “CoffeeGo” con una línea que lo relaciona con el ODS 9.
6. Entrega
Un archivo coffeego.html que se abre con doble clic, publicado además como página con enlace para mostrarlo en clase.
Verificación con navegador automatizado: flujo completo de pedido, QR, cambio de rol y gestión de productos.





    COFFEEGO

Optimización del servicio de cafetería mediante tecnología digital

ODS 9: Industria, Innovación e Infraestructura

Presentado por:
Jhonnás de Jesús Charris Ruiz
Leyder Alexander Mendoza Lobo
Joshua Monterrosa Solano
Esteban Camilo Olivera Amador
Josué David Paternina Llanos

Presentado a: Rua Ascar Juan Manuel

Universidad Simón Bolívar
Ingeniería de Sistemas
Asignatura: Algoritmia y Programación I
Barranquilla, Atlántico
2026

 Introducción
La transformación digital ha permitido mejorar numerosos procesos en diferentes ámbitos de la sociedad, incluyendo el sector educativo. En las instituciones universitarias, el uso de herramientas tecnológicas contribuye a optimizar los servicios y ofrecer mejores experiencias a sus usuarios. En este contexto, la cafetería universitaria representa un espacio donde pueden presentarse oportunidades de mejora, especialmente durante las horas de mayor afluencia, cuando se generan largas filas, congestión y pérdida de tiempo. Ante esta situación surge CoffeeGo, una propuesta tecnológica orientada a modernizar la atención y la gestión de pedidos en la cafetería de la Universidad Simón Bolívar. La iniciativa plantea el uso de una aplicación móvil que permita consultar el menú, conocer los precios, realizar pedidos anticipados y facilitar la entrega de productos mediante códigos QR. Esta propuesta se relaciona directamente con el Objetivo de Desarrollo Sostenible 9 (ODS 9), denominado Industria, Innovación e Infraestructura, el cual promueve la innovación y la incorporación de tecnologías para mejorar procesos y servicios.
Planteamiento del problema
Actualmente, la cafetería presenta dificultades en el proceso de atención debido a que los pedidos se realizan directamente en el mostrador. Esta situación genera largas filas, especialmente durante las horas de almuerzo, cuando aumenta la cantidad de estudiantes que utilizan el servicio. Además, los productos y sus respectivos precios no se encuentran disponibles de manera digital, por lo que los estudiantes deben consultar directamente con el personal de la cafetería antes de realizar su pedido. Esta situación evidencia la necesidad de incorporar herramientas tecnológicas que permitan modernizar y agilizar el proceso de atención.
Las largas filas generan diferentes consecuencias para los usuarios de la cafetería. Principalmente, los estudiantes deben invertir una parte considerable de su tiempo esperando para realizar sus pedidos, lo que puede afectar el tiempo disponible para sus actividades académicas y personales. De igual manera, la acumulación de personas ocupa gran parte del espacio disponible dentro de la cafetería, dificultando el desplazamiento y generando una mayor congestión en el lugar. Esta situación también representa un reto para el personal encargado de la atención, debido a que debe atender a una gran cantidad de personas en periodos de alta demanda.
El problema afecta principalmente a los estudiantes, quienes son los usuarios que hacen mayor uso de la cafetería, pero también involucra al personal encargado de prestar el servicio y al espacio físico de la cafetería. Por esta razón, es importante buscar alternativas que permitan mejorar la organización y eficiencia del servicio sin modificar de manera significativa la actividad que actualmente se realiza.
Este problema se relaciona con el Objetivo de Desarrollo Sostenible 9 (ODS 9): Industria, innovación e infraestructura, cuyo propósito es construir infraestructuras resilientes, promover una industrialización sostenible y fomentar la innovación. Dentro de sus metas se encuentra la modernización de infraestructuras y la adopción de tecnologías que permitan mejorar los procesos y utilizar los recursos de manera más eficiente.
Por lo anterior, resulta importante minimizar el impacto generado por las largas filas mediante la implementación de una alternativa tecnológica que permita agilizar el proceso de atención. La propuesta del grupo consiste en desarrollar una aplicación que permita consultar los productos y sus precios, realizar los pedidos previamente y utilizar un código QR para facilitar la entrega y el proceso de pago o descuento correspondiente. De esta manera, se busca aprovechar la tecnología y la innovación para ofrecer un servicio más rápido y organizado, reduciendo la congestión y el tiempo de espera de los estudiantes.

Justificación
La creación de CoffeeGo surge de la necesidad de reducir los tiempos de espera y optimizar la atención en la cafetería universitaria. La ausencia de herramientas tecnológicas limita la organización de los pedidos y puede generar retrasos durante los horarios de mayor demanda. Mediante una aplicación móvil, los estudiantes podrán consultar el menú, conocer los precios y realizar sus pedidos antes de llegar al mostrador, lo que contribuirá a disminuir las filas y mejorar la utilización de los recursos disponibles. Además, el proyecto fomenta la innovación tecnológica dentro del entorno universitario y promueve el desarrollo de soluciones digitales capaces de responder a necesidades cotidianas de manera eficiente.
Objetivos
Objetivo general: 
Diseñar y desarrollar una aplicación que permita optimizar el proceso de atención y gestión de pedidos en la cafetería de la Universidad Simón Bolívar .

Objetivos específicos: 
1.Identificar las principales causas que generan congestión y largas filas en la cafetería 
2.diseñar un software que muestre el catálogo digital con los productos y precios disponibles 
3.permitir la realización de pedidos anticipados desde dispositivos móviles
4.reducir los tiempos de espera y mejorar la organización del servicio
5. promover la innovación tecnológica dentro de la comunidad universitaria.
Desarrollo de la propuesta CoffeeGo
CoffeeGo se podría abrir desde la aplicación de la universidad Unisimón diseñada para facilitar la compra de productos dentro de la cafetería universitaria. Su funcionamiento iniciará cuando el estudiante acceda al sistema y consulte el menú digital disponible. Posteriormente, podrá seleccionar los productos deseados, confirmar su pedido y recibir un código QR asociado a la orden realizada. La cafetería preparará el pedido y el usuario únicamente deberá presentar el código para reclamar su compra. Adicionalmente, la propuesta contempla la consulta del estado de los pedidos y una herramienta básica de gestión de productos para el administrador. Estas funcionalidades permitirán organizar mejor la información, facilitar el seguimiento de las órdenes y mejorar la experiencia tanto de estudiantes como del personal encargado del servicio. La misión de CoffeeGo es contribuir a una atención más rápida, organizada y eficiente mediante herramientas digitales, mientras que su visión consiste en consolidarse como una solución innovadora que impulse la transformación digital y optimice la experiencia de compra dentro de la universidad.
 Alcance, beneficiarios e impacto esperado
En su etapa inicial, CoffeeGo incluirá la visualización del menú digital, la consulta de precios y disponibilidad de productos, la realización de pedidos anticipados, la generación de códigos QR para la entrega, la consulta del estado de las órdenes y la gestión básica de productos por parte del administrador. Para mantener un alcance definido, la propuesta no contempla pagos en línea, entregas a domicilio, integración con entidades bancarias ni sistemas avanzados de fidelización. Los principales beneficiarios directos serán los estudiantes de la Universidad Simón Bolívar, quienes podrán acceder a la información de los productos y realizar pedidos de forma anticipada. También se beneficiarán el personal de la cafetería y los administradores del servicio gracias a una mejor organización de las órdenes. De forma indirecta, la comunidad universitaria y posibles visitantes podrán verse favorecidos por la reducción de la congestión, el mejor aprovechamiento de los espacios y una atención más eficiente.
Relación con el ODS 9
CoffeeGo se encuentra alineado con el Objetivo de Desarrollo Sostenible 9: Industria, Innovación e Infraestructura, debido a que propone una solución tecnológica para optimizar un servicio tradicional mediante herramientas digitales. La propuesta fomenta la innovación a través del uso de una aplicación móvil, la digitalización de procesos y la implementación de códigos QR para agilizar la entrega de pedidos. De esta manera, el proyecto promueve la modernización de los servicios universitarios y demuestra cómo la tecnología puede contribuir a mejorar la eficiencia operativa y la experiencia de los usuarios.
Conclusiones
CoffeeGo representa una oportunidad para mejorar el servicio de cafetería de la Universidad Simón Bolívar mediante la incorporación de tecnologías digitales. La implementación de un menú digital, los pedidos anticipados y los códigos QR puede contribuir a organizar mejor la gestión de pedidos, disminuir la congestión y ofrecer una experiencia más cómoda para los estudiantes. Asimismo, la propuesta facilita el trabajo del personal encargado de la atención y promueve la transformación digital dentro del entorno universitario. Finalmente, el proyecto constituye una aplicación práctica de los principios del ODS 9 al utilizar la innovación tecnológica como herramienta para responder a una necesidad cotidiana de la comunidad académica.

aca te doy contexto de lo que quiero crear, cualquier pregunta o algo hazmelo desde ya, no hagas los tipicos estilos css y js de IA, quiero que sea clean, fuente arial, que literal parezca una pagina para pedir productos