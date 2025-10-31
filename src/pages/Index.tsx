import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface Material {
  id: number;
  name: string;
  description: string;
  currentStock: number;
  minStock: number;
  price: number;
  status: string;
}

interface Barber {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  image: string;
}

const Index = () => {
  const [materials, setMaterials] = useState<Material[]>([
    { id: 2, name: "Ножницы парикмахерские профессиональные", description: "Инструмент для парикмахера", currentStock: 10, minStock: 5, price: 560, status: "В НАЛИЧИИ" },
    { id: 6, name: "Бальзам", description: "Для волос", currentStock: 10, minStock: 1, price: 900, status: "В НАЛИЧИИ" },
    { id: 3, name: "Шампунь", description: "После окрашивания", currentStock: 40, minStock: 1, price: 700, status: "В НАЛИЧИИ" },
    { id: 5, name: "Гель-лак", description: "красного цвета", currentStock: 2, minStock: 2, price: 450, status: "В НАЛИЧИИ" },
    { id: 1, name: "Перчатки", description: "Перчатки для мастеров маникюра", currentStock: 11, minStock: 10, price: 10, status: "В НАЛИЧИИ" },
  ]);

  const [barbers] = useState<Barber[]>([
    {
      id: 1,
      name: "Александр Петров",
      specialty: "Классические стрижки",
      experience: "8 лет опыта",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      specialty: "Бороды и усы",
      experience: "5 лет опыта",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Максим Соколов",
      specialty: "Современные стрижки",
      experience: "6 лет опыта",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-1">Управление барбершопом</h1>
          <p className="text-sm text-muted-foreground">Система учёта материалов и записи клиентов</p>
        </div>

        <Tabs defaultValue="materials" className="w-full">
          <TabsList className="bg-card border border-border mb-4">
            <TabsTrigger value="materials" className="data-[state=active]:bg-secondary">
              Материалы
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-secondary">
              Транзакции
            </TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-secondary">
              Добавить материал
            </TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="fade-in">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold">Список материалов:</h2>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Обновить
                </Button>
              </div>

              <Card className="border border-border shadow-sm">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                      <TableHead className="font-semibold text-foreground w-16">ID</TableHead>
                      <TableHead className="font-semibold text-foreground">Название</TableHead>
                      <TableHead className="font-semibold text-foreground">Описание</TableHead>
                      <TableHead className="font-semibold text-foreground text-center w-32">Текущий запас</TableHead>
                      <TableHead className="font-semibold text-foreground text-center w-32">Мин. запас</TableHead>
                      <TableHead className="font-semibold text-foreground text-right w-24">Цена</TableHead>
                      <TableHead className="font-semibold text-foreground text-center w-32">Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {materials.map((material) => (
                      <TableRow 
                        key={material.id} 
                        className="bg-accent/60 hover:bg-accent/70 transition-colors border-b border-accent/30"
                      >
                        <TableCell className="font-medium text-foreground">{material.id}</TableCell>
                        <TableCell className="font-medium text-foreground">{material.name}</TableCell>
                        <TableCell className="text-foreground/80">{material.description}</TableCell>
                        <TableCell className="text-center text-foreground">{material.currentStock}</TableCell>
                        <TableCell className="text-center text-foreground">{material.minStock}</TableCell>
                        <TableCell className="text-right font-semibold text-foreground">{material.price}</TableCell>
                        <TableCell className="text-center">
                          <span className="text-sm font-semibold text-green-700">
                            {material.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

            </div>
          </TabsContent>

          <TabsContent value="transactions" className="fade-in">
            <Card className="border border-border p-6">
              <p className="text-muted-foreground text-center">Раздел в разработке</p>
            </Card>
          </TabsContent>

          <TabsContent value="add" className="fade-in">
            <Card className="border border-border p-6 max-w-2xl">
              <h3 className="text-lg font-semibold mb-4">Добавить новый материал</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Название</Label>
                  <Input id="name" placeholder="Введите название материала" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Описание</Label>
                  <Input id="description" placeholder="Введите описание" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="stock">Текущий запас</Label>
                    <Input id="stock" type="number" placeholder="0" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="minStock">Минимальный запас</Label>
                    <Input id="minStock" type="number" placeholder="0" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Цена</Label>
                  <Input id="price" type="number" placeholder="0" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Сохранить материал
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;