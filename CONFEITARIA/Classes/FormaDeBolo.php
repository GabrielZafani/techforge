<?php 

class FormaDeBolo 
{
    private array $ingredientes = ["leite", "farinha", "acucar", "ovo" ];
    private int $tempoForno = 1;

    public function __construct(private string $nomeCliente)
    {

    }

    public function cliente()
    {
        echo "O cliente é: " . $this->nomeCliente . "<br>";
    }

    public function fazerBolo() 
    {   
        $this->misturarIngredientes();
        $this->formaBolo();
        $this->enviarNotificação();
        
        
    }
    
    public function misturarIngredientes() 
    {
       if(count($this->ingredientes) === 0) {
            echo "Não há ingredientes para fazer o bolo.";
            return;
        }
        
        echo "Misturando os ingredientes: " . json_encode($this->ingredientes) . "<br>";
    }
    public function formaBolo()
    {   
      
        if (in_array('chocolate', $this->ingredientes)) {
            echo "O bolo de chocolate deve ser colocado na forma quadrada <br>.";
            
        }

        elseif(in_array('baunilha', $this->ingredientes)) {
            echo "O bolo de baunilha deve ser colocado na forma redonda. <br>";
            
        }
        else {
            echo "O bolo deve ser colocado na forma retangular." . "<br>";
            
        }
    }
    public function enviarNotificação()  
    {   
       if ($this->ingredientes > 0 ) {
            echo "O seu bolo está sendo preparado <br>" ;
            
        }

    }

    public function colocarNoForno(int $tempoForno = 1) 
    {
        $this->tempoForno = $tempoForno;
        echo "Colocando o bolo no forno por " . $this->tempoForno . " hora(s).<br>";
    }

    public function adicionaIngredientes(array $novosIngredientes)
    {
        foreach ($novosIngredientes as $ingrediente) {
           array_push($this->ingredientes, $ingrediente);
           echo "Adicionando ingrediente: $ingrediente <br>";
        }
    }

    public function tranferirIngredientes(string $ingrediente, FormaDeBolo $boloAreceberIngrediente)
    {
        array_push($boloAreceberIngrediente->ingredientes, $ingrediente);

        $key = array_search($ingrediente, $this->ingredientes);
        if ($key !== false) {
            unset($this->ingredientes[$key]);
           
        }

        echo "Transferindo ingrediente: $ingrediente <br>";
    }
}
?>