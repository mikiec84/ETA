default_new={"ri_templatejg7rpi97":null,"vi_templatejg7rpkiv":"{\"nodes\":[{\"x\":160,\"y\":169,\"fixed\":true,\"text\":\"a\",\"initial\":true,\"px\":160,\"py\":169}],\"edges\":[{\"source\":0,\"target\":0,\"text\":\"17,18,20,24\"}],\"usercode\":\"INTEGER(m1,0)\\nINTEGER(m2,0)\\nINTEGER(m3,0)\\nINTEGER(m4,0)\\na:\\n    {\\n        print(chn)\\n    }\\na--17-->a:\\n    {m1+=1}\\na--18-->a:\\n    {m2+=1}\\na--20-->a:\\n    {m3+=1}\\na--24-->a:\\n    {m4+=1}\\n\"}","eta_index_table":"[{\"id\":\"var_templatejkfmw6go\",\"name\":\"NewParameter\",\"group\":\"main\",\"info\":\"value\",\"config\":\"c:\\\\example.ptu\"},{\"id\":\"dpp_templatejjimi7y0\",\"name\":\"markercount\",\"group\":\"main\",\"info\":\"\",\"config\":\"\"},{\"id\":\"dpp_templatejkb2gjdk\",\"name\":\"browsefile\",\"group\":\"main\",\"info\":\"\",\"config\":\"\"},{\"id\":\"ri_templatejg7rpi97\",\"name\":\"HydraHarp\",\"group\":\"main\",\"info\":\"📤 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]\",\"config\":\"[25,0]\"},{\"id\":\"vi_templatejg7rpkiv\",\"name\":\"countmarkers\",\"group\":\"main\",\"info\":\"📥 [17, 18, 20, 24], 📤 [], 📊 ??? \",\"config\":\"\"}]","dpp_templatejjimi7y0":"from os import path\r\n\r\nfile=path.join(folder,filename)\r\n\r\n\r\nresult = eta.run(file, group = 'main')\r\nm1=result[\"scalar_m1\"][0]\r\nm2=result[\"scalar_m2\"][0]\r\nm3=result[\"scalar_m3\"][0]\r\nm4=result[\"scalar_m4\"][0]\r\n\r\neta.send(\"m1: \"+str(m1)+\", m2: \"+str(m2)+\", m3: \"+str(m3)+\", m4: \"+str(m4))\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","dpp_templatejkb2gjdk":"import tkinter as tk\r\nfrom tkinter.filedialog import askopenfilename\r\nroot = tk.Tk()\r\nroot.update()\r\nroot.withdraw()\r\nroot.attributes(\"-toolwindow\", 1)\r\nroot.wm_attributes(\"-topmost\", 1)\r\npath = askopenfilename(filetypes=[(\"Time Tag File\",\"*.*\")],initialdir='K:/')\r\nroot.destroy()\r\neta.send(path)\r\neta.recipe_set_parameter(\"filename\",path)","var_templatejkfmw6go":null}