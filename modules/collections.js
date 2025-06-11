// modules/collections.js
export default {
    title: "📦 Коллекции",
    content: `
        <h2>📦 Java Collections Framework</h2>
        
        <details>
            <summary><span class="emoji">🗂️</span>Иерархия коллекций</summary>
            <div class="content">
                
                <details class="nested">
                    <summary>Основные интерфейсы</summary>
                    <div class="content">
                        <div class="definition">Структура интерфейсов:</div>
                        <div class="code-block">Iterable
    └── Collection
        ├── List
        │   └── Deque
        ├── Set
        │   └── SortedSet
        │       └── NavigableSet
        └── Queue
            └── Deque

Map
└── SortedMap
    └── NavigableMap</div>
                        
                        <div class="definition">Ключевые методы Collection:</div>
                        <ul>
                            <li><span class="code">add(E e)</span> - добавить элемент</li>
                            <li><span class="code">remove(Object o)</span> - удалить элемент</li>
                            <li><span class="code">contains(Object o)</span> - проверка наличия</li>
                            <li><span class="code">size()</span> - количество элементов</li>
                            <li><span class="code">clear()</span> - очистить коллекцию</li>
                            <li><span class="code">iterator()</span> - получить итератор</li>
                        </ul>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>fail-fast vs fail-safe</summary>
                    <div class="content">
                        <div class="definition">fail-fast:</div>
                        <ul>
                            <li>Бросает <span class="error">ConcurrentModificationException</span></li>
                            <li>При изменении коллекции во время итерации</li>
                            <li>Большинство коллекций (ArrayList, HashMap)</li>
                        </ul>
                        
                        <div class="code-block">List<String> list = new ArrayList<>();
list.add("A"); list.add("B");

// fail-fast - выбросит исключение
for (String s : list) {
    list.remove(s); // ConcurrentModificationException!
}

// Правильно - через итератор
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    it.next();
    it.remove(); // OK
}</div>
                        
                        <div class="definition">fail-safe:</div>
                        <ul>
                            <li>Работает на копии данных</li>
                            <li>Не бросает исключения</li>
                            <li>Concurrent коллекции (CopyOnWriteArrayList)</li>
                        </ul>
                    </div>
                </details>
                
            </div>
        </details>
        
        <details>
            <summary><span class="emoji">📋</span>List реализации</summary>
            <div class="content">
                <table class="performance-table">
                    <tr>
                        <th>Операция</th>
                        <th>ArrayList</th>
                        <th>LinkedList</th>
                        <th>Vector</th>
                    </tr>
                    <tr>
                        <td>Доступ по индексу</td>
                        <td><span class="highlight">O(1)</span></td>
                        <td><span class="error">O(n)</span></td>
                        <td><span class="highlight">O(1)</span></td>
                    </tr>
                    <tr>
                        <td>Вставка в начало</td>
                        <td><span class="error">O(n)</span></td>
                        <td><span class="highlight">O(1)</span></td>
                        <td><span class="error">O(n)</span></td>
                    </tr>
                    <tr>
                        <td>Вставка в конец</td>
                        <td><span class="highlight">O(1)*</span></td>
                        <td><span class="highlight">O(1)</span></td>
                        <td><span class="highlight">O(1)*</span></td>
                    </tr>
                    <tr>
                        <td>Удаление по индексу</td>
                        <td><span class="warning">O(n)</span></td>
                        <td><span class="warning">O(n)</span></td>
                        <td><span class="warning">O(n)</span></td>
                    </tr>
                    <tr>
                        <td>Потокобезопасность</td>
                        <td><span class="error">НЕТ</span></td>
                        <td><span class="error">НЕТ</span></td>
                        <td><span class="highlight">ДА</span></td>
                    </tr>
                </table>
                
                <div class="definition">Когда использовать:</div>
                <ul>
                    <li><span class="highlight">ArrayList:</span> Частый доступ по индексу, добавление в конец</li>
                    <li><span class="highlight">LinkedList:</span> Частые вставки/удаления в начале/середине</li>
                    <li><span class="error">Vector:</span> Устарел, используй Collections.synchronizedList()</li>
                </ul>
                
                <div class="definition">ArrayList особенности:</div>
                <ul>
                    <li>Начальная емкость: 10 элементов</li>
                    <li>Увеличение: newCapacity = oldCapacity * 1.5</li>
                    <li>Можно задать начальную емкость в конструкторе</li>
                </ul>
            </div>
        </details>
        
        <details>
            <summary><span class="emoji">🗺️</span>Map реализации</summary>
            <div class="content">
                
                <details class="nested">
                    <summary>HashMap внутреннее устройство</summary>
                    <div class="content">
                        <div class="definition">Структура HashMap:</div>
                        <ul>
                            <li>Массив бакетов (Node[] table)</li>
                            <li>Начальная емкость: 16</li>
                            <li>Load factor: 0.75</li>
                            <li>Порог для дерева: 8 элементов (Java 8+)</li>
                        </ul>
                        
                        <div class="definition">Алгоритм работы:</div>
                        <ol>
                            <li>Вычисляем <span class="code">hash = key.hashCode()</span></li>
                            <li>Находим бакет: <span class="code">index = hash & (length-1)</span></li>
                            <li>В бакете:
                                <ul>
                                    <li>До 8 элементов - связный список</li>
                                    <li>8+ элементов - красно-черное дерево</li>
                                </ul>
                            </li>
                        </ol>
                        
                        <div class="code-block">// Правильный hashCode для HashMap
@Override
public int hashCode() {
    int result = 17;
    result = 31 * result + field1.hashCode();
    result = 31 * result + field2.hashCode();
    return result;
}

// Почему 31? 
// 1) Простое число - меньше коллизий
// 2) 31 * i == (i << 5) - i (оптимизация)</div>
                    </div>
                </details>
                
                <details class="nested">
                    <summary>Сравнение Map реализаций</summary>
                    <div class="content">
                        <table class="performance-table">
                            <tr>
                                <th>Характеристика</th>
                                <th>HashMap</th>
                                <th>LinkedHashMap</th>
                                <th>TreeMap</th>
                                <th>ConcurrentHashMap</th>
                            </tr>
                            <tr>
                                <td>Поиск/Вставка</td>
                                <td><span class="highlight">O(1)</span></td>
                                <td><span class="highlight">O(1)</span></td>
                                <td><span class="warning">O(log n)</span></td>
                                <td><span class="highlight">O(1)</span></td>
                            </tr>
                            <tr>
                                <td>Порядок ключей</td>
                                <td><span class="error">НЕТ</span></td>
                                <td><span class="highlight">Вставки</span></td>
                                <td><span class="highlight">Сортированный</span></td>
                                <td><span class="error">НЕТ</span></td>
                            </tr>
                            <tr>
                                <td>Null ключи</td>
                                <td><span class="highlight">1 null ключ</span></td>
                                <td><span class="highlight">1 null ключ</span></td>
                                <td><span class="error">НЕТ</span></td>
                                <td><span class="error">НЕТ</span></td>
                            </tr>
                            <tr>
                                <td>Thread-safe</td>
                                <td><span class="error">НЕТ</span></td>
                                <td><span class="error">НЕТ</span></td>
                                <td><span class="error">НЕТ</span></td>
                                <td><span class="highlight">ДА</span></td>
                            </tr>
                        </table>
                    </div>
                </details>
                
            </div>
        </details>
    `
};