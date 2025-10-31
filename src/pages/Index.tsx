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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Scissors" size={32} className="text-accent" />
              <h1 className="text-3xl font-bold">БАРБЕРШОП</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#masters" className="hover:text-accent transition-colors">Мастера</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="masters" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="masters" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              Мастера
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <Icon name="Package" size={18} />
              Материалы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="masters" className="fade-in">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold mb-3">Наши мастера</h2>
              <p className="text-muted-foreground text-lg">Профессионалы своего дела</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {barbers.map((barber) => (
                <Card key={barber.id} className="overflow-hidden hover-scale cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={barber.image} 
                      alt={barber.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                      <p className="text-sm opacity-90">{barber.specialty}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">{barber.experience}</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-accent fill-accent" />
                        <span className="font-semibold">{barber.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                      Записаться
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="fade-in">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Список материалов</h2>
                  <p className="text-muted-foreground">Управление складом барбершопа</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-accent hover:bg-accent/90 text-primary">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Добавить материал
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Добавить новый материал</DialogTitle>
                      <DialogDescription>
                        Заполните информацию о новом материале
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Название</Label>
                        <Input id="name" placeholder="Название материала" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Описание</Label>
                        <Input id="description" placeholder="Описание" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="stock">Текущий запас</Label>
                          <Input id="stock" type="number" placeholder="0" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="minStock">Мин. запас</Label>
                          <Input id="minStock" type="number" placeholder="0" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="price">Цена</Label>
                        <Input id="price" type="number" placeholder="0" />
                      </div>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                      Сохранить
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">ID</TableHead>
                      <TableHead className="font-semibold">Название</TableHead>
                      <TableHead className="font-semibold">Описание</TableHead>
                      <TableHead className="font-semibold text-center">Текущий запас</TableHead>
                      <TableHead className="font-semibold text-center">Мин. запас</TableHead>
                      <TableHead className="font-semibold text-right">Цена</TableHead>
                      <TableHead className="font-semibold text-center">Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {materials.map((material) => (
                      <TableRow key={material.id} className="hover:bg-muted/30 transition-colors">
                        <TableCell className="font-medium">{material.id}</TableCell>
                        <TableCell className="font-medium">{material.name}</TableCell>
                        <TableCell className="text-muted-foreground">{material.description}</TableCell>
                        <TableCell className="text-center">{material.currentStock}</TableCell>
                        <TableCell className="text-center">{material.minStock}</TableCell>
                        <TableCell className="text-right font-semibold">{material.price} ₽</TableCell>
                        <TableCell className="text-center">
                          <Badge 
                            variant={material.currentStock <= material.minStock ? "destructive" : "default"}
                            className={material.currentStock > material.minStock ? "bg-green-500 hover:bg-green-600" : ""}
                          >
                            {material.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon name="Package" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Всего материалов</p>
                      <p className="text-2xl font-bold">{materials.length}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Icon name="CheckCircle" size={24} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">В наличии</p>
                      <p className="text-2xl font-bold">
                        {materials.filter(m => m.currentStock > m.minStock).length}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-destructive/10 rounded-lg">
                      <Icon name="AlertCircle" size={24} className="text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Требуют заказа</p>
                      <p className="text-2xl font-bold">
                        {materials.filter(m => m.currentStock <= m.minStock).length}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scissors" size={24} className="text-accent" />
                <h3 className="font-bold text-xl">БАРБЕРШОП</h3>
              </div>
              <p className="text-sm opacity-80">Профессиональный уход за вашим стилем</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@barbershop.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Режим работы</h4>
              <div className="space-y-1 text-sm opacity-80">
                <p>Пн-Пт: 10:00 - 21:00</p>
                <p>Сб-Вс: 11:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm opacity-60">
            © 2024 Барбершоп. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
