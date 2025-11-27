
abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private items: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (!this.items[item]) {
            this.items[item] = 0;
        }
        this.items[item] += quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private items: Record<string, number> = {};
    private maxLimit = 10;

    addItem(item: string, quantity: number): void {
        if (!this.items[item]) {
            this.items[item] = 0;
        }
        const soma = this.items[item] + quantity;
        this.items[item] = soma > this.maxLimit ? this.maxLimit : soma;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Parafuso", 500);
warehouse.addItem("Parafuso", 300);
warehouse.addItem("martelo", 2);
warehouse.addItem("fenda", 1);
console.log(warehouse.getInventory());

warehouse.removeItem("Parafuso");
console.log(warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Camiseta", 3);
console.log(store.getInventory());

store.addItem("Camiseta", 20);
console.log(store.getInventory());





