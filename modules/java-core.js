// modules/java-core.js
export default {
    title: "☕ Java Core",
    content: `
        <h2>☕ Java Core</h2>
        
        <details>
            <summary><span class="emoji">💻</span>Платформа Java</summary>
            <div class="content">
                
                <details class="nested">
                    <summary>JVM, JDK, JRE</summary>
                    <div class="content">
                        <div class="definition">JVM (Java Virtual Machine):</div>
                        Виртуальная машина Java - среда выполнения байт-кода. Обеспечивает платформонезависимость.<br><br>
                        
                        <div class="definition">JRE (Java Runtime Environment):</div>
                        Минимальная среда для запуска Java-приложений. Включает JVM + стандартные библиотеки.<br><br>
                        
                        <div class="definition">JDK (Java Development Kit):</div>
                        Полный набор для разработки. JRE + компилятор javac + утилиты (javadoc, jar, etc.)<br><br>
                        
                        <div class="code-block">// Проверка версии
java -version      // JRE версия
javac -version     // JDK версия</div>
                        
                        <div class="definition">Важно помнить:</div>
                        <ul>
                            <li><span class="highlight">JDK</span> содержит JRE</li>
                            <li><span class="highlight">JRE</span> содержит JVM</li>
                            <li><span class="warning">Для разработки</span> нужен JDK</li>
                            <li><span class="info">Для запуска</span> достаточно JRE</li>
                        </ul>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>Компиляция и выполнение</summary>
                    <div class="content">
                        <div class="definition">Процесс компиляции:</div>
                        <ol>
                            <li><strong>.java файл</strong> → javac → <strong>.class файл</strong> (байт-код)</li>
                            <li><strong>.class файл</strong> → JVM → машинный код</li>
                        </ol>
                        
                        <div class="code-block">// Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}

// Компиляция и запуск
javac Hello.java   // создает Hello.class
java Hello         // запускает программу</div>
                        
                        <div class="definition">Just-In-Time (JIT) компиляция:</div>
                        <ul>
                            <li>Компилирует "горячий" байт-код в машинный код</li>
                            <li>Оптимизирует производительность во время выполнения</li>
                            <li>HotSpot JVM использует C1 и C2 компиляторы</li>
                        </ul>
                    </div>
                </details>
                
            </div>
        </details>
        
        <details>
            <summary><span class="emoji">📝</span>Основы языка</summary>
            <div class="content">
                
                <details class="nested">
                    <summary>Типы данных</summary>
                    <div class="content">
                        <div class="definition">Примитивные типы:</div>
                        <table class="performance-table">
                            <tr>
                                <th>Тип</th>
                                <th>Размер</th>
                                <th>Диапазон</th>
                                <th>Default</th>
                            </tr>
                            <tr>
                                <td><span class="code">byte</span></td>
                                <td>8 бит</td>
                                <td>-128 ... 127</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><span class="code">short</span></td>
                                <td>16 бит</td>
                                <td>-32,768 ... 32,767</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><span class="code">int</span></td>
                                <td>32 бит</td>
                                <td>-2³¹ ... 2³¹-1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><span class="code">long</span></td>
                                <td>64 бит</td>
                                <td>-2⁶³ ... 2⁶³-1</td>
                                <td>0L</td>
                            </tr>
                            <tr>
                                <td><span class="code">float</span></td>
                                <td>32 бит</td>
                                <td>±3.4E-38 ... ±3.4E+38</td>
                                <td>0.0f</td>
                            </tr>
                            <tr>
                                <td><span class="code">double</span></td>
                                <td>64 бит</td>
                                <td>±1.7E-308 ... ±1.7E+308</td>
                                <td>0.0d</td>
                            </tr>
                            <tr>
                                <td><span class="code">char</span></td>
                                <td>16 бит</td>
                                <td>0 ... 65,535 (Unicode)</td>
                                <td>'\\u0000'</td>
                            </tr>
                            <tr>
                                <td><span class="code">boolean</span></td>
                                <td>не определен</td>
                                <td>true/false</td>
                                <td>false</td>
                            </tr>
                        </table>
                        
                        <div class="definition">Ссылочные типы:</div>
                        <ul>
                            <li>Классы (String, Integer, Object...)</li>
                            <li>Интерфейсы</li>
                            <li>Массивы</li>
                            <li>Enum</li>
                        </ul>
                        
                        <div class="definition">Autoboxing/Unboxing:</div>
                        <div class="code-block">// Autoboxing: примитив → обертка
Integer num = 42;  // int → Integer

// Unboxing: обертка → примитив  
int value = num;   // Integer → int

// Осторожно с null!
Integer nullNum = null;
int bad = nullNum; // NullPointerException!</div>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>Модификаторы доступа</summary>
                    <div class="content">
                        <table class="performance-table">
                            <tr>
                                <th>Модификатор</th>
                                <th>Класс</th>
                                <th>Пакет</th>
                                <th>Наследники</th>
                                <th>Все</th>
                            </tr>
                            <tr>
                                <td><span class="code">private</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="error">✗</span></td>
                                <td><span class="error">✗</span></td>
                                <td><span class="error">✗</span></td>
                            </tr>
                            <tr>
                                <td><span class="code">default</span> (package)</td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="error">✗</span></td>
                                <td><span class="error">✗</span></td>
                            </tr>
                            <tr>
                                <td><span class="code">protected</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="error">✗</span></td>
                            </tr>
                            <tr>
                                <td><span class="code">public</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                                <td><span class="highlight">✓</span></td>
                            </tr>
                        </table>
                        
                        <div class="definition">Правила использования:</div>
                        <ul>
                            <li><span class="highlight">private</span> - инкапсуляция, внутренние детали</li>
                            <li><span class="highlight">default</span> - для классов в одном пакете</li>
                            <li><span class="highlight">protected</span> - для наследования</li>
                            <li><span class="highlight">public</span> - публичный API</li>
                        </ul>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>Ключевые слова</summary>
                    <div class="content">
                        <div class="definition">final:</div>
                        <ul>
                            <li><strong>Переменная</strong> - нельзя изменить значение</li>
                            <li><strong>Метод</strong> - нельзя переопределить</li>
                            <li><strong>Класс</strong> - нельзя наследовать</li>
                        </ul>
                        
                        <div class="code-block">final int CONSTANT = 42;       // константа
final List<String> list = new ArrayList<>();  // ссылка final
list.add("OK");                // но содержимое можно менять!

final class Immutable { }       // нельзя extends
class Child extends Immutable { } // Ошибка компиляции!</div>
                        
                        <div class="definition">static:</div>
                        <ul>
                            <li><strong>Поле</strong> - одно на класс (не на объект)</li>
                            <li><strong>Метод</strong> - принадлежит классу</li>
                            <li><strong>Блок</strong> - выполняется при загрузке класса</li>
                            <li><strong>Класс</strong> - только вложенные классы</li>
                        </ul>
                        
                        <div class="definition">abstract:</div>
                        <ul>
                            <li><strong>Класс</strong> - нельзя создать экземпляр</li>
                            <li><strong>Метод</strong> - без реализации (только сигнатура)</li>
                        </ul>
                    </div>
                </details>
                
            </div>
        </details>
        
        <details>
            <summary><span class="emoji">🏛️</span>Классы и объекты</summary>
            <div class="content">
                
                <details class="nested">
                    <summary>Конструкторы и инициализация</summary>
                    <div class="content">
                        <div class="definition">Порядок инициализации:</div>
                        <ol>
                            <li>Статические поля и блоки родителя</li>
                            <li>Статические поля и блоки класса</li>
                            <li>Поля экземпляра родителя</li>
                            <li>Конструктор родителя</li>
                            <li>Поля экземпляра класса</li>
                            <li>Конструктор класса</li>
                        </ol>
                        
                        <div class="code-block">class Parent {
    static { System.out.println("1. Parent static block"); }
    { System.out.println("3. Parent instance block"); }
    
    Parent() { System.out.println("4. Parent constructor"); }
}

class Child extends Parent {
    static { System.out.println("2. Child static block"); }
    { System.out.println("5. Child instance block"); }
    
    Child() { System.out.println("6. Child constructor"); }
}</div>
                        
                        <div class="definition">Виды конструкторов:</div>
                        <ul>
                            <li><strong>По умолчанию</strong> - создается компилятором</li>
                            <li><strong>С параметрами</strong> - для инициализации</li>
                            <li><strong>Копирования</strong> - создание копии объекта</li>
                        </ul>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>Методы класса Object</summary>
                    <div class="content">
                        <div class="definition">Основные методы:</div>
                        <ul>
                            <li><span class="code">equals(Object obj)</span> - сравнение объектов</li>
                            <li><span class="code">hashCode()</span> - хеш-код объекта</li>
                            <li><span class="code">toString()</span> - строковое представление</li>
                            <li><span class="code">clone()</span> - клонирование (protected)</li>
                            <li><span class="code">getClass()</span> - получить класс объекта</li>
                            <li><span class="code">finalize()</span> - вызывается GC (deprecated)</li>
                        </ul>
                        
                        <div class="definition">Контракт equals и hashCode:</div>
                        <ul>
                            <li>Если <span class="code">a.equals(b)</span>, то <span class="code">a.hashCode() == b.hashCode()</span></li>
                            <li>Если <span class="code">a.hashCode() != b.hashCode()</span>, то <span class="code">!a.equals(b)</span></li>
                            <li>Но: одинаковый hashCode не гарантирует equals!</li>
                        </ul>
                        
                        <div class="code-block">@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    
    Person person = (Person) obj;
    return age == person.age && 
           Objects.equals(name, person.name);
}

@Override
public int hashCode() {
    return Objects.hash(name, age);
}</div>
                    </div>
                </details>
                
            </div>
        </details>
    `
};