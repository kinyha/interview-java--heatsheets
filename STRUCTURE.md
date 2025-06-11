# Структура тем Java Interview Шпаргалка

## 🎯 Core Java (Основы)

### 1. ☕ Java Core
- **Платформа Java**
  - JVM, JDK, JRE
  - Компиляция и выполнение
  - Classpath и Classloader
- **Основы языка**
  - Типы данных и переменные
  - Операторы и выражения
  - Модификаторы доступа
  - Ключевые слова (final, static, abstract...)
- **Классы и объекты**
  - Конструкторы и инициализация
  - Вложенные классы
  - Анонимные классы
  - Методы класса Object
- **Строки**
  - String, StringBuilder, StringBuffer
  - String Pool
  - Immutability
- **Исключения**
  - Иерархия исключений
  - Checked vs Unchecked
  - Try-with-resources
- **Память и GC**
  - Stack vs Heap
  - Garbage Collector
  - Утечки памяти
- **Generics**
- **Аннотации**
- **Reflection**
- **Сериализация**

### 2. 🏗️ ООП
- **Основные принципы**
  - Инкапсуляция
  - Наследование
  - Полиморфизм
  - Абстракция
- **SOLID принципы**
- **Отношения между объектами**
  - Композиция vs Агрегация
  - Связанность и связность

### 3. 📦 Коллекции
- **Интерфейсы**
  - Collection, List, Set, Map
  - Queue, Deque
- **Реализации**
  - ArrayList vs LinkedList
  - HashMap внутреннее устройство
  - HashSet vs TreeSet
  - Специальные коллекции
- **Алгоритмы и утилиты**
  - Collections класс
  - Comparator vs Comparable
- **Concurrent коллекции**

### 4. 🚀 Java 8+
- **Функциональные интерфейсы**
- **Lambda выражения**
- **Method references**
- **Stream API**
  - Промежуточные операции
  - Терминальные операции
  - Parallel streams
- **Optional**
- **Date/Time API**
- **Default методы в интерфейсах**

### 5. 🧵 Многопоточность
- **Основы**
  - Thread vs Runnable vs Callable
  - Жизненный цикл потока
  - Daemon threads
- **Синхронизация**
  - synchronized
  - volatile
  - Мониторы и locks
- **Проблемы многопоточности**
  - Race condition
  - Deadlock, Livelock
  - Starvation
- **java.util.concurrent**
  - Executors и Thread pools
  - Concurrent коллекции
  - Atomic классы
  - CountDownLatch, CyclicBarrier, Semaphore
- **Fork/Join Framework**

## 💼 Enterprise Java

### 6. 🌱 Spring Framework
- **Spring Core**
  - IoC и DI
  - Bean lifecycle
  - Scopes
  - Annotations
- **Spring Boot**
  - Автоконфигурация
  - Starters
  - Properties
- **Spring MVC/REST**
  - Controllers
  - Request mapping
  - Exception handling
- **Spring Data**
  - Repositories
  - Query methods
- **Spring Security**

### 7. ☕ Java EE
- **Web компоненты**
  - Servlets
  - JSP и JSTL
  - Filters и Listeners
- **Enterprise компоненты**
  - EJB
  - JMS
  - JPA

### 8. 🗄️ Базы данных
- **SQL**
  - DDL, DML, DCL
  - Joins
  - Индексы
  - Транзакции и ACID
- **JDBC**
- **ORM**
  - JPA
  - Hibernate
  - Mapping strategies
- **NoSQL основы**

### 9. 🌐 Web
- **Протоколы**
  - HTTP/HTTPS
  - WebSocket
- **REST**
  - Принципы REST
  - HTTP методы
  - Status codes
- **Форматы данных**
  - JSON
  - XML
- **Безопасность**
  - Authentication vs Authorization
  - JWT
  - CORS

## 🛠️ Инструменты и практики

### 10. 📐 Паттерны и архитектура
- **Порождающие паттерны**
  - Singleton
  - Factory
  - Builder
- **Структурные паттерны**
  - Adapter
  - Decorator
  - Proxy
- **Поведенческие паттерны**
  - Observer
  - Strategy
  - Iterator
- **Архитектурные паттерны**
  - MVC
  - Layered architecture
  - Микросервисы

### 11. 🧪 Тестирование
- **Unit тестирование**
  - JUnit
  - Mockito
  - Test coverage
- **Интеграционное тестирование**
- **Логирование**
  - SLF4J
  - Logback/Log4j

### 12. 🔧 Инструменты разработки
- **Системы сборки**
  - Maven
  - Gradle
- **Контроль версий**
  - Git основы
- **IDE**
- **Профилирование и отладка**

## 📡 Дополнительные технологии

### 13. 📨 Kafka
### 14. 🅺 Kotlin
### 15. ⚡ Реактивное программирование
### 16. 🏢 Микросервисы
### 17. 🐳 Docker основы
### 18. 🔒 Безопасность

## 📝 Опционально

### 19. 🎨 Frontend basics
- HTML/CSS основы
- JavaScript основы
- Работа с API