import csv

dades = csv.reader(open('ACCIDENTS_GU_BCN_2015.csv'), delimiter=',')
keep = [2,4,8,10,16,17,18,19,20]
keep_names = ["Nom districte","Nom barri","Descripcio dia setmana","Descripcio tipus dia","Descripcio torn","Descripcio causa vianant","Numero de morts","Numero de lesionats lleus","Numero de lesionats greus","Numero de vehicles implicat"]
unique_items = {}
for num in keep:
    unique_items[num] = {}
for row in dades:
    for i in keep:
        unique_items[i][row[i]]=0
    
print unique_items

'''
OUTPUT:

{2: {'Gracia': 0, 'Ciutat Vella': 0, 'Nom districte': 0, 'Eixample': 0, 'Desconegut': 0, 'Sant Andreu': 0, 'Sants-Montju\xefc': 0, 'Sant Marti': 0, 'Les Corts': 0, 'Horta-Guinardo': 0, 'Sarria-Sant Gervasi': 0, 'Nou Barris': 0}, 
4: {'la Maternitat i Sant Ramon': 0, 'la Clota': 0, 'la Vall d Hebron': 0, 'la Verneda i la Pau': 0, 'la Prosperitat': 0, 'Vallvidrera. el Tibidabo i les Planes': 0, 'Desconegut': 0, 'Proven\xe7als del Poblenou': 0, 'Sarria': 0, 'les Roquetes': 0, 'el Besos i el Maresme': 0, 'Nom barri': 0, 'la Marina del Prat Vermell': 0, 'el Barri Gotic': 0, 'Can Baro': 0, 'Verdun': 0, 'la Guineueta': 0, 'Vilapicina i la Torre Llobeta': 0, 'la Sagrada Familia': 0, 'la Vila de Gracia': 0, 'Sants': 0, 'la Vila Olimpica del Poblenou': 0, 'Can Peguera': 0, 'el Putxet i el Farro': 0, 'la Font de la Guatlla': 0, 'Torre Baro': 0, 'la Dreta de l Eixample': 0, 'el Camp de l Arpa del Clot': 0, 'el Bon Pastor': 0, 'Sant Andreu': 0, 'el Baix Guinardo': 0, 'la Teixonera': 0, 'Hostafrancs': 0, 'la Marina de Port': 0, 'el Raval': 0, 'el Coll': 0, 'Vallcarca i els Penitents': 0, 'Sants - Badal': 0, 'Sant Gervasi - Galvany': 0, 'Sant Genis dels Agudells': 0, 'Sant Pere. Santa Caterina i la Ribera': 0, 'la Nova Esquerra de l Eixample': 0, 'Navas': 0, 'la Font d en Fargues': 0, 'el Congres i els Indians': 0, 'Porta': 0, 'el Carmel': 0, 'el Guinardo': 0, 'la Trinitat Nova': 0, 'el Poble Sec': 0, 'Sant Marti de Proven\xe7als': 0, 'Sant Antoni': 0, 'Horta': 0, 'el Clot': 0, 'Ciutat Meridiana': 0, 'el Parc i la Llacuna del Poblenou': 0, 'la Trinitat Vella': 0, 'Vallbona': 0, 'el Camp d en Grassot i Gracia Nova': 0, 'el Turo de la Peira': 0, 'Canyelles': 0, 'Pedralbes': 0, 'la Barceloneta': 0, 'la Sagrera': 0, 'Montbau': 0, 'la Bordeta': 0, 'el Fort Pienc': 0, 'les Tres Torres': 0, 'les Corts': 0, 'Sant Gervasi - la Bonanova': 0, 'Baro de Viver': 0, 'l Antiga Esquerra de l Eixample': 0, 'la Salut': 0, 'Diagonal Mar i el Front Maritim del Poblenou': 0, 'el Poblenou': 0}, 
8: {'Diumenge': 0, 'Descripcio dia setmana': 0, 'Dissabte': 0, 'Dijous': 0, 'Divendres': 0, 'Dilluns': 0, 'Dimarts': 0, 'Dimecres': 0}, 
10: {'Laboral': 0, 'Descripcio tipus dia': 0}, 
16: {'Descripcio torn': 0, 'Tarda': 0, 'Nit': 0, 'Mati': 0}, 
17: {'Descripcio causa vianant': 0, 'Transitar a peu per la cal\xe7ada': 0, 'Desobeir altres senyals': 0, 'No es causa del  vianant': 0, 'Desobeir el senyal del semafor': 0, 'Creuar per fora pas de vianants': 0, 'Altres': 0}, 
18: {'1': 0, '0': 0, '3': 0, 'Numero de morts': 0}, 
19: {'11': 0, 'Numero de lesionats lleus': 0, '1': 0, '0': 0, '3': 0, '2': 0, '5': 0, '4': 0, '7': 0, '6': 0, '9': 0, '8': 0}, 
20: {'Numero de lesionats greus': 0, '0': 0, '2': 0, '1': 0, '3': 0}}
'''




'''